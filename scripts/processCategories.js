// Importar las librerías necesarias
import * as use from '@tensorflow-models/universal-sentence-encoder';
import fs from 'fs/promises';
import * as tf from '@tensorflow/tfjs-node';

const filePath = './src/lib/data.json';
const outputPath = './src/lib/processedData.json';

const cooperativasRaw = await fs.readFile(filePath, 'utf8');
const cooperativas = JSON.parse(cooperativasRaw);

// Categorías detalladas con descripciones largas y etiquetas cortas
const categoriesDetailed = [
	{
		short: 'Arte, Cultura y Educación',
		long: 'Arte, cultura y educación, que incluye cooperativas de arte, música, teatro y educación'
	},
	{
		short: 'Agricultura y Ganadería',
		long: 'Agricultura y ganadería, cooperativas relacionadas con la producción de alimentos, ganado, agricultura y cultivos'
	},
	{
		short: 'Alimentación y Transformación',
		long: 'Alimentación y transformación, cooperativas relacionadas con productos alimenticios como panaderías, bodegas, cárnicos'
	},
	{
		short: 'Vivienda y Urbanismo',
		long: 'Vivienda y urbanismo, cooperativas que promueven la construcción de viviendas y urbanización'
	},
	{
		short: 'Energía y Sostenibilidad',
		long: 'Energía y sostenibilidad, proyectos de energías renovables y sostenibilidad medioambiental'
	},
	{
		short: 'Servicios Comunitarios y Sociales',
		long: 'Servicios comunitarios y sociales, transporte, guarderías, y otros servicios comunitarios'
	},
	{
		short: 'Naturaleza y Medio Ambiente',
		long: 'Naturaleza y medio ambiente, reforestación, gestión de bosques y proyectos relacionados con el entorno natural'
	},
	{ short: 'Otros', long: 'Otros, para cooperativas que no encajan en ninguna otra categoría' }
];

// Función para calcular la similitud coseno entre dos vectores
function cosineSimilarity(vecA, vecB) {
	return tf.tidy(() => {
		const dotProduct = tf.dot(vecA, vecB).arraySync();
		const normA = tf.norm(vecA).arraySync();
		const normB = tf.norm(vecB).arraySync();
		return dotProduct / (normA * normB);
	});
}

// Función para clasificar los textos usando el modelo
async function classifyCooperativas(cooperativas) {
	const model = await use.load();
	console.log('Modelo cargado. 🤙');

	// Crear embeddings de las descripciones largas de las categorías
	const categoryEmbeddings = await model.embed(categoriesDetailed.map((cat) => cat.long));

	const resultados = [];
	const all = cooperativas.length;
	let lastProgress = -1;

	for (let index = 0; index < cooperativas.length; index++) {
		const coop = cooperativas[index];
		const text = `${coop.denominacion} ${coop.clase}`; // Combinar denominacion y clase
		const textEmbedding = await model.embed(text);

		let maxSimilarity = -Infinity;
		let bestCategory = 'Otros';

		// Calcular la similitud con cada categoría
		for (let i = 0; i < categoriesDetailed.length; i++) {
			const categoryVector = categoryEmbeddings.arraySync()[i];
			const similarity = cosineSimilarity(textEmbedding.arraySync()[0], categoryVector);

			if (similarity > maxSimilarity && similarity > 0.5) {
				// Umbral ajustable
				maxSimilarity = similarity;
				bestCategory = categoriesDetailed[i].short; // Usar etiqueta corta
			}
		}

		// Guardar la categoría con mayor similitud
		resultados.push({ ...coop, categoria: bestCategory });

		const progress = Math.floor((index / all) * 100);
		if (progress % 10 === 0 && progress !== lastProgress) {
			console.log(`Progress: ${progress}%`);
			lastProgress = progress;
		}
	}

	return resultados;
}

// Ejecutar la clasificación
(async () => {
	const resultados = await classifyCooperativas(cooperativas);
	console.log('Clasificación completada.');
	const jsonData = JSON.stringify(resultados, null, 4);
	await fs.writeFile(outputPath, jsonData, 'utf8');
})();
