<script lang="ts">
	import type { VideoContent } from '$lib/models/video_content';

	const { content }: { content: VideoContent } = $props();
</script>

{content.title}

{#each content.urls as url (url)}
	<div class="relative w-full pb-[56.25%] mt-4 ml-2">
		<iframe
			title=""
			src={url}
			class="absolute inset-0 w-full h-full rounded-xl"
			allow="autoplay; encrypted-media"
			allowfullscreen
		></iframe>
	</div>
{/each}
