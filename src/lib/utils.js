export function format(n) {
	if (n !== undefined) {
		return n.toLocaleString('es-AR', {
			minimumFractionDigits: 0,
			maximumFractionDigits: 1
		});
	}
}
export function getMaxItems(maxItems) {
	if (maxItems.length === 1) {
		const item = maxItems[0];
		return item.nombre;
	}
	if (maxItems.length === 2) {
		return maxItems.map((author) => author.nombre).join(' y ');
	}
	const allButLastMaxItems = maxItems
		.slice(0, -1)
		.map((author) => author.nombre)
		.join(', ');
	const lastAuthor = maxItems[maxItems.length - 1];
	return `${allButLastMaxItems} y ${lastAuthor.nombre}`;
}
