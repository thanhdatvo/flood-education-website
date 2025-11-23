<script lang="ts">
	import SubContents from '$lib/components/SubContents.svelte';
	import type { Content } from '$lib/models/content';

	const warnings: Content[] = [
		{
			title: 'Cảnh báo khẩn cấp',
			contents: [
				'Thông báo “Mức nước vượt báo động 2"',
				'Khuyến cáo sơ tán',
				'Thông tin từ Trung tâm Dự báo Khí tượng'
			]
		},
		{
			title: 'Dự báo thời tiết',
			contents: ['Lượng mưa 24h', 'Khu vực có nguy cơ lũ quét', 'Gió mạnh, bão, áp thấp nhiệt đới']
		},
		{
			title: 'Gợi ý an toàn',
			contents: [
				'Tránh đi qua vùng ngập sâu',
				'Tuyệt đối không bơi, lội qua nước chảy xiết',
				'Chuẩn bị đèn pin, áo phao, đồ cứu hộ'
			]
		}
	];
</script>

<SubContents subContents={warnings} />
