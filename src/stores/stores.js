import { writable, derived } from 'svelte/store';
import { cooperativas } from '../lib/data.js';

// Datos originales
export const defaultData = writable(cooperativas);

// Filtro de entrada
export const filterValue = writable('');
export const selectedTypes = writable(['VIVIENDAS', 'CONSUMIDORES Y USUARIOS']);

// Store que filtra los datos según la entrada
export const filteredData = derived(
	[defaultData, filterValue, selectedTypes],
	([$defaultData, $filterValue, $selectedTypes]) =>
		$defaultData.filter(
			(item) =>
				// Filtro por denominación
				item.denominacion.toLowerCase().includes($filterValue.toLowerCase()) &&
				// Filtro por tipos (solo si hay seleccionados)
				($selectedTypes.length === 0 || $selectedTypes.includes(item.clase))
		)
);

// Ordenamiento
export const sortBy = writable();
const sorting = derived(sortBy, ($sortBy) => {
	if ($sortBy === undefined) return;
	let sortModifier = $sortBy.ascending ? 1 : -1;
	return function (a, b) {
		return a[$sortBy.col] < b[$sortBy.col]
			? -1 * sortModifier
			: a[$sortBy.col] > b[$sortBy.col]
				? 1 * sortModifier
				: 0;
	};
});

// Datos filtrados y ordenados
export const data = derived([filteredData, sorting], ([$filteredData, $sorting]) =>
	$filteredData.sort($sorting)
);
export const typesDefault = derived(
	[defaultData, selectedTypes],
	([$defaultData, $selectedTypes]) => {
		const uniqueTypes = Array.from(new Set($defaultData.map((row) => row.clase)));
		return uniqueTypes.sort((a, b) => {
			const aSelected = $selectedTypes.includes(a) ? -1 : 1;
			const bSelected = $selectedTypes.includes(b) ? -1 : 1;
			return aSelected - bSelected;
		});
	}
);

export const types = derived(typesDefault, ($typesDefault) =>
	$typesDefault.filter((type) => selectedTypes.includes(type))
);
