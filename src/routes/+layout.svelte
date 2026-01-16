<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" />
	<meta name="description" content="Coon Circles - Creating safe spaces for brave leaders to grow through transformation, connection, and relational healing." />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header />

	<main class="flex-1 pt-16">
		{@render children()}
	</main>

	<Footer />
</div>
