<script>
	import FilterName from './FilterName.svelte';
	import FilterBadge from './FilterBadge.svelte';
	import {
		typesDefault,
		selectedTypes,
		categoriesDefault,
		selectedCategories
	} from '../../stores/stores.js';
</script>

<div class="section">
	<p>Puedes utilizar los siguientes filtros para ajustar los resultados de búsqueda.</p>
	<div class="filters">
		<div class="filter">
			<FilterName />
		</div>
		<div class="filter">
			<FilterBadge
				title="Clase de la cooperativa"
				availableItems={typesDefault}
				selectedItems={selectedTypes}
			/>
		</div>
		<div class="filter">
			<FilterBadge
				title="Categoría"
				desc="Esta clasificación se ha hecho de manera manual y no forma parte del registro oficial."
				availableItems={categoriesDefault}
				selectedItems={selectedCategories}
			/>
		</div>
	</div>
</div>

<style>
	.filter {
		position: relative;
		margin-bottom: 2rem;
	}
	.section {
		max-width: 50rem;
		margin-left: auto;
		margin-right: auto;
		padding: 0 1rem;
		margin-bottom: 1rem;
	}
	.filters {
		padding: 0.75rem;
		border: 1px solid rgb(60, 55, 25);
		border-radius: 5px;
		box-shadow: #0003 0 8px 12px;
	}
</style>
