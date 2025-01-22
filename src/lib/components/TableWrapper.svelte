<script>
	export let collapsedTable = true;
	import Table from './Table.svelte';
</script>

<div class="table-section">
	<Table />
</div>

<style>
	.table-section {
		max-width: 70rem;
		margin: 0 auto;
		position: relative;
		padding: 0 1rem;
		margin-top: 2rem;
	}

	.table-section > .table-details p {
		max-width: none;
	}
	.table-details p {
		max-width: 500px;
	}
	.table-details {
		max-width: 50rem;
		margin-left: auto;
		margin-right: auto;
		gap: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-start;
		flex-direction: column-reverse;
	}

	.table-details.top {
		margin: 1rem 0;
		flex-direction: row;
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
	.arrow {
		display: none;
		align-items: center;
		align-content: center;
		justify-content: center;
		background: #2f3032;
		padding: 1rem;
		width: 10px;
		height: 10px;
		position: absolute;
		z-index: 1;
	}
	.pagination-arrow {
		width: 20px;
		height: 20px;
		z-index: 1;
		margin-right: 5px;
	}
	.move {
		animation: move 1s infinite;
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
