<script>
	const { contents } = $props();
</script>

<ul class="list-disc pt-1 pl-4 font-normal">
	{#each contents as content (content)}
		<li>{content}</li>
	{/each}
</ul>
