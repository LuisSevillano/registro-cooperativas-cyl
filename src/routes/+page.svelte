<script>
	import { siteTitle, siteDescription, siteLongDesc } from '$lib/config';
	import { format, getMaxItems } from '../lib/utils.js';
	import TableWrapper from '$lib/components/TableWrapper.svelte';
	import Filters from '$lib/components/Filters.svelte';

	let width;
	$: isDesktop = width > 600;
</script>

<main bind:clientWidth={width}>
	<header>
		<h1>{siteTitle}</h1>
	</header>
	<section>
		<p>{@html siteLongDesc}</p>
	</section>
	<section>
		<Filters />
	</section>
	<section>
		<TableWrapper />
	</section>
</main>

<style>
	section p {
		max-width: 50rem;
		margin-left: auto;
		margin-right: auto;
		padding: 0 1rem;
	}
	header {
		padding: 3rem 1rem 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		position: relative;
		margin-bottom: 0rem;
	}
	@media (min-width: 830px) {
		header {
			padding: 0 1rem;
			padding-top: 4rem;

			width: auto;
		}
	}
	h1 {
		font-size: 2.5rem;
	}
	h3 {
		font-size: 1.5rem;
	}
	h1,
	h3 {
		display: block;
		width: 100%;
		max-width: 50rem;
		margin: 0 auto;
		text-wrap: balance;
		line-height: 3.5rem;
	}
	h3 {
		font-weight: lighter;
		margin-top: 0.25rem;
	}
</style>
