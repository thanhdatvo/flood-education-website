<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import VideoContentC from '$lib/components/VideoContent.svelte';

	import type { VideoContent } from '$lib/models/video_content';

	const videoContents: VideoContent[] = [
		{
			title: 'Nguyên nhân lũ lụt:',
			urls: [
				'https://www.youtube.com/embed/48rguAox-9M',
				'https://www.youtube.com/embed/uRW8n8KKazs'
			]
		},
		{
			title: 'Cách phòng tránh lũ quét:',
			urls: [
				'https://www.youtube.com/embed/18_QtDaFzyA',
				'https://www.youtube.com/embed/xqTjS75UHZc'
			]
		},
		{
			title: 'Hậu quả lũ lụt:',
			urls: ['https://www.youtube.com/embed/o_GlGDm0FAU']
		}
	];

	const stories: VideoContent[] = [
		{
			title: 'Câu chuyện thực tế về lũ lụt:',
			urls: ['https://www.youtube.com/embed/Y9X3LR9Q9KA']
		},
		{
			title: 'Gương cứu hộ dũng cảm:',
			urls: [
				'https://www.youtube.com/embed/y8eU1ISaRf4',
				'https://www.youtube.com/embed/jEdbYUodjBc',
				'https://www.youtube.com/embed/XgQ8Je70z-g'
			]
		},
		{
			title: 'Những tấm lòng thiện nguyện:',
			urls: [
				'https://www.youtube.com/embed/oX4N50evgtA',
				'https://www.youtube.com/embed/qejVULlM7ko'
			]
		}
	];
</script>

<!-- {#snippet videoContent(content: VideoContent)} -->
<!-- {/snippet} -->

<SectionTitle title="Video - Infographic" />
<ul class="list-disc pt-1 pl-4 font-normal">
	{#each videoContents as content (content.title)}
		<li class="mt-4">
			<VideoContentC {content} />
		</li>
	{/each}
</ul>
<hr class="my-10 border-t border-gray-300" />
<div class="mt-7"></div>
<SectionTitle title="Câu chuyện thực tế" />
<ul class="list-disc pt-1 pl-4 font-normal">
	{#each stories as content (content.title)}
		<li class="mt-4">
			<VideoContentC {content} />
		</li>
	{/each}
</ul>
