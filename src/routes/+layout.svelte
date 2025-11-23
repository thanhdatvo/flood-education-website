<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Background from '$lib/components/Background.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Background></Background>
<div class="max-w-3xl mx-auto bg-white overflow-scroll body">
	<div
		class="w-full h-64 bg-cover bg-center mt-4 rounded-xl"
		style="background-image: url('/images/banner.jpg');"
	></div>
	<div class="px-6 bg-gray-100">
		<br />
		<h1 class="text-3xl font-bold">
			Trang thông tin lũ lụt – Chung tay giảm thiểu thiệt hại do thiên tai.
		</h1>
		<h2 class="italic pt-2 pb-6">
			Trang web cung cấp kiến thức, cảnh báo và hướng dẫn ứng phó lũ lụt dành cho cộng đồng, học
			sinh, giáo viên và người dân.
		</h2>
	</div>
	{@render children()}
</div>

<style>
	.body {
		position: absolute;
		overflow: scroll-auto;
		height: 100vh;
	}
	@media (min-width: 800px) {
		.body {
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
</style>
