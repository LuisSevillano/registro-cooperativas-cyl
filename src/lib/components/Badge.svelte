<script>
	export let type = '';
	export let index;
	export let selectedItems;

	// Determinar si el badge está activo basado en el store
	$: active = $selectedItems.includes(type);

	// Manejar clics en el badge
	function toggleType() {
		if (active) {
			selectedItems.update((types) => types.filter((t) => t !== type));
		} else {
			selectedItems.update((types) => [...types, type]);
		}
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<label for="b-{index}" class:active on:click={toggleType}>
	{type}
</label>
<input type="checkbox" id="b-{index}" checked={active} />

<style>
	.active {
		color: rgb(55 65 81);
		background: rgb(208 215 225);
	}
	label {
		font-size: 0.8rem;
		border-radius: 9999px;
		color: rgb(160 169 183);
		background-color: rgb(55 65 81);
		cursor: pointer;
		padding: 0.125rem 0.625rem;
		margin-right: 0.5rem;
	}
	input[type='checkbox'] {
		opacity: 0;
		height: 0;
		width: 0;
		margin: 0;
		padding: 0;
	}
</style>
