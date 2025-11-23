<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="max-w-3xl mx-auto px-4">
	<div
		class="w-full h-64 bg-cover bg-center"
		style="background-image: url('/images/banner.jpg');"
	></div>
	<div>
		<br />
		<h1 class="text-3xl font-bold">
			Trang thông tin lũ lụt – Chung tay giảm thiểu thiệt hại do thiên tai.
		</h1>
		<h2>
			Trang web cung cấp kiến thức, cảnh báo và hướng dẫn ứng phó lũ lụt dành cho cộng đồng, học
			sinh, giáo viên và người dân.
		</h2>
		<br />
	</div>
	{@render children()}
</div>
