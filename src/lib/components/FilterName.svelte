<script>
	import { filterValue } from '../../stores/stores.js';
</script>

<label for="f-denominacion">
	<span>Denominación de la cooperativa</span>
	<div class="input">
		<input
			type="text"
			id="f-denominacion"
			on:input={(e) => filterValue.set(e.target.value.trim())}
			bind:value={$filterValue}
		/>
		{#if $filterValue !== ''}
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button
				on:click={() => {
					filterValue.set('');
				}}
			>
				<svg
					class="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"
					></path></svg
				>
			</button>
		{/if}
	</div>
</label>

<style>
	button {
		position: absolute;
		font-family: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		font-size: 100%;
		font-weight: inherit;
		line-height: inherit;
		letter-spacing: inherit;
		color: white;
		top: 0px;
		right: 0px;
		bottom: 0px;
		margin: 0.125rem;
		display: flex;
		align-items: center;
		border: none;
		background-color: transparent;
		padding: 0.375rem;
		cursor: pointer;
	}

	button:hover {
		color: rgb(180, 180, 180);
	}

	svg {
		height: 1.25rem;
		width: 1.25rem;
	}

	.input {
		display: flex;
		align-items: center;
		position: relative;
	}

	span {
		padding: 0.5rem 0;
	}
	label {
		display: flex;
		flex-direction: column;
	}
	[type='text'] {
		color: white;
		padding: 1.5rem;
		appearance: none;
		background-color: rgb(91, 83, 46);
		border-width: 1px;
		padding: 0.5rem 0.75rem;
		font-size: 1rem;
		line-height: 1.5rem;
		border-radius: 0.2rem;
		width: 100%;
		outline: transparent solid 2px;
		border-color: white;
	}
	[type='text']:focus {
		outline-color: rgb(69, 63, 36);
	}
</style>
