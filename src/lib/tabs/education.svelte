<script lang="ts">
	import VideoContentC from '$lib/components/VideoContent.svelte';
	import type { VideoContent } from '$lib/models/video_content';

	const floodCauses: VideoContent = {
		title: 'Tìm hiểu nguyên nhân lũ',
		urls: ['https://www.youtube.com/embed/48rguAox-9M', 'https://www.youtube.com/embed/uRW8n8KKazs']
	};
	let currentTabId = $state(1);
	let tabs = [
		{ id: 1, title: 'Tìm hiểu nguyên nhân lũ' },
		{ id: 2, title: 'Phân tích thiệt hại tỉnh em' },
		{ id: 3, title: 'Tạo poster tuyên truyền' },
		{ id: 4, title: 'Trắc nghiệm online' }
	];
</script>

<div class="grid grid-flow-col text-center text-gray-500">
	{#each tabs as tab (tab.id)}
		<button
			class="flex justify-center p-4 {currentTabId === tab.id
				? 'bg-white rounded-tl-lg rounded-tr-lg border-l border-t border-r border-gray-200'
				: ''}"
			on:click|preventDefault={() => (currentTabId = tab.id)}
		>
			{tab.title}
		</button>
	{/each}
</div>
<div class="bg-white shadow border border-gray-200 p-8 text-gray-700 rounded-md -mt-1">
	{#if currentTabId === 1}
		<VideoContentC content={floodCauses} />
	{:else if currentTabId === 2}
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
	{:else if currentTabId === 3}
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
	{:else if currentTabId === 4}
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
	{/if}
</div>
<!-- <ul class="list-disc pt-1 pl-4 font-normal [&>li]:mt-7"> -->
<!-- 	<li> -->
<!-- 		<VideoContentC content={floodCauses} /> -->
<!-- 	</li> -->
<!-- 	<li> -->
<!-- 		Phân tích thiệt hại tỉnh em: học sinh làm và nộp bài tập tại link -->
<!-- 		<div class="relative w-full pb-[96.25%] mt-4 ml-2"> -->
<!-- 			<iframe -->
<!-- 				title="" -->
<!-- 				src="https://docs.google.com/forms/d/e/1FAIpQLSfAM6i5cNAYAc6VUYuVVtKG_kDS9kjmwTvqNyQRaay-e2XcBw/viewform?embedded=true" -->
<!-- 				class="absolute inset-0 w-full h-full rounded-xl" -->
<!-- 				allow="autoplay; encrypted-media" -->
<!-- 				allowfullscreen -->
<!-- 			></iframe> -->
<!-- 		</div> -->
<!-- 	</li> -->
<!-- 	<li> -->
<!-- 		Tạo poster tuyên truyền: học sinh thiết kế poster và gửi vào link -->
<!-- 		<div class="relative w-full pb-[96.25%] mt-4 ml-2"> -->
<!-- 			<iframe -->
<!-- 				title="" -->
<!-- 				src="https://padlet.com/embed/vob269o0ikhmhubj" -->
<!-- 				class="absolute inset-0 w-full h-full rounded-xl" -->
<!-- 				allow="autoplay; encrypted-media" -->
<!-- 				allowfullscreen -->
<!-- 			></iframe> -->
<!-- 		</div> -->
<!-- 	</li> -->
<!-- 	<li> -->
<!-- 		Trắc nghiệm online: kiến thức phòng chống thiên tai -->
<!-- 		<div class="relative w-full pb-[96.25%] mt-4 ml-2"> -->
<!-- 			<iframe -->
<!-- 				title="" -->
<!-- 				src="https://wayground.com/join?gc=62521530&source=liveDashboard" -->
<!-- 				class="absolute inset-0 w-full h-full rounded-xl" -->
<!-- 				allow="autoplay; encrypted-media" -->
<!-- 				allowfullscreen -->
<!-- 			></iframe> -->
<!-- 		</div> -->
<!-- 	</li> -->
<!-- </ul> -->
