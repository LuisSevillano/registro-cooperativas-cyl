<script>
	export let collapsedTable = true;
	import Table from './Table.svelte';
	import { filteredData } from '../../stores/stores';
	import { format } from '$lib/utils.js';
</script>

<div class="table-section">
	<div class="table-details"><p>Se muestran {format($filteredData.length)} registros.</p></div>
	<Table />
</div>

<style>
	.table-details {
		margin-bottom: 1rem;
	}
	.table-details p {
		text-align: right;
		font-size: 1rem;
	}
	.table-section {
		max-width: 70rem;
		margin: 0 auto;
		position: relative;
		padding: 0 1rem;
		margin-top: 2rem;
	}

	@media (min-width: 600px) {
		.arrow {
			display: flex;
		}

		.table-details {
			flex-direction: row;
		}

		.table-details p {
			margin-bottom: 0;
		}
	}

	@keyframes move {
		0% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(5px);
		}
	}
</style>
