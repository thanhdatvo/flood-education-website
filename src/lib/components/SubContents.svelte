<script>
	import Contents from './Contents.svelte';
	const { subContents } = $props();
</script>

<ol class="list-decimal pl-0 [&>li]:font-bold">
	{#each subContents as item (item.title)}
		<li class="pt-2">
			<h1 class="text-md font-bold">{item.title}</h1>
			<Contents contents={item.contents} />
		</li>
	{/each}
</ol>
