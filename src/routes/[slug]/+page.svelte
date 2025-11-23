<script>
	import HomePage from '$lib/pages/home_page.svelte';
	import { page } from '$app/state';
	const slug = $derived(page.params.slug);
</script>

<HomePage {slug} />
