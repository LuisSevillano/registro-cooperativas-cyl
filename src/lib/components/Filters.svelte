<script>
	import FilterName from './FilterName.svelte';
	import FilterType from './FilterType.svelte';
</script>

<div class="section">
	<p>Puedes utilizar los siguientes filtros para ajustar los resultados de búsqueda</p>
	<div class="filters">
		<div class="filter">
			<FilterName />
		</div>
		<div class="filter">
			<FilterType />
		</div>
	</div>
</div>

<style>
	.filter {
		position: relative;
		margin-bottom: 0.5rem;
	}
	.section {
		max-width: 50rem;
		margin-left: auto;
		margin-right: auto;
		padding: 0 1rem;
		margin-bottom: 1rem;
	}
</style>
