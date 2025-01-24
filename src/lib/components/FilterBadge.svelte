<script>
	import { typesDefault } from '../../stores/stores.js';
	import Badge from './Badge.svelte';

	// Props
	export let title = ''; // El título del filtro (por ejemplo, 'Clase de la cooperativa')
	export let desc;
	export let availableItems; // Store con los valores disponibles (como typesDefault)
	export let selectedItems; // Store con los valores seleccionados (como selectedTypes)

	function toggleItem(item) {
		const currentSelected = get(selectedItems);

		if (currentSelected.includes(item)) {
			// Quitar el elemento si ya está seleccionado
			selectedItems.update((items) => items.filter((i) => i !== item));
		} else {
			// Añadir el elemento si no está seleccionado
			selectedItems.update((items) => [...items, item]);
		}
	}
</script>

<div class="title">{title}</div>

<div class="badges">
	{#each $availableItems as type, index}
		<Badge {type} {index} {selectedItems} />
	{/each}
</div>
{#if desc}
	<small>{desc}</small>
{/if}

<style>
	small {
		font-size: 0.75rem;
		opacity: 0.5;
		font-style: italic;
	}
	.badges {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		row-gap: 0.5rem;
	}
	.title {
		padding: 0.5rem 0;
	}
</style>
