<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let name;
	function action() {
		dispatch('click', {
			text: 'Hello!'
		});
	}
</script>

<div on:click={action}>
	{#if name === 'add'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
			fill="none"
			stroke="green"
			stroke-width="8"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<title>Añadir fila</title><circle cx="50" cy="50" r="40" />
			<line x1="35" y1="50" x2="65" y2="50" />
			<line x1="50" y1="35" x2="50" y2="65" /></svg
		>
	{:else if name === 'subtract'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
			fill="none"
			stroke="#c2a0a0"
			stroke-width="8"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<title>Eliminar fila</title>
			<circle cx="50" cy="50" r="40" /> <line x1="35" y1="50" x2="65" y2="50" /></svg
		>
	{:else if name === 'edit'}
		<svg
			class="feather feather-edit"
			fill="none"
			height="24"
			stroke="white"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path
				d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
			/><title>Editar valor</title></svg
		>
	{:else}
		<!-- else content here -->
	{/if}
</div>

<style>
	div {
		display: flex;
	}
	svg {
		cursor: pointer;
		width: 20px;
		height: 20px;
	}
</style>
