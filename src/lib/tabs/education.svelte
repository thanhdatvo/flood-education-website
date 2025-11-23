<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import VideoContentC from '$lib/components/VideoContent.svelte';
	import type { VideoContent } from '$lib/models/video_content';

	const floodCauses: VideoContent = {
		title: 'Tìm hiểu nguyên nhân lũ',
		urls: ['https://www.youtube.com/embed/48rguAox-9M', 'https://www.youtube.com/embed/uRW8n8KKazs']
	};
</script>

<SectionTitle title="Bài tập" />

<ul class="list-disc pt-1 pl-4 font-normal [&>li]:mt-7">
	<li>
		<VideoContentC content={floodCauses} />
	</li>
	<li>
		Phân tích thiệt hại tỉnh em: học sinh làm và nộp bài tập tại link
		<div class="relative w-full pb-[96.25%] mt-4 ml-2">
			<iframe
				title=""
				src="https://docs.google.com/forms/d/e/1FAIpQLSfAM6i5cNAYAc6VUYuVVtKG_kDS9kjmwTvqNyQRaay-e2XcBw/viewform?embedded=true"
				class="absolute inset-0 w-full h-full rounded-xl"
				allow="autoplay; encrypted-media"
				allowfullscreen
			></iframe>
		</div>
	</li>
	<li>
		Tạo poster tuyên truyền: học sinh thiết kế poster và gửi vào link
		<div class="relative w-full pb-[96.25%] mt-4 ml-2">
			<iframe
				title=""
				src="https://padlet.com/embed/vob269o0ikhmhubj"
				class="absolute inset-0 w-full h-full rounded-xl"
				allow="autoplay; encrypted-media"
				allowfullscreen
			></iframe>
		</div>
	</li>
	<li>
		Trắc nghiệm online: kiến thức phòng chống thiên tai
		<div class="relative w-full pb-[96.25%] mt-4 ml-2">
			<iframe
				title=""
				src="https://wayground.com/join?gc=62521530&source=liveDashboard"
				class="absolute inset-0 w-full h-full rounded-xl"
				allow="autoplay; encrypted-media"
				allowfullscreen
			></iframe>
		</div>
	</li>
</ul>
