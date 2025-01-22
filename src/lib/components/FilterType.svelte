<script>
	import { typesDefault } from '../../stores/stores.js';
	import Badge from './Badge.svelte';
</script>

<div class="title">Clase de la cooperativa</div>
<div class="badges">
	{#each $typesDefault as type, index}
		<Badge {type} {index} />
	{/each}
</div>

<style>
	.badges {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		gap: 0.5rem;
	}
	.title {
		padding: 0.5rem 0;
	}
</style>
