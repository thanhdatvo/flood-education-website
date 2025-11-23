<script lang="ts">
	import SubContents from '$lib/components/SubContents.svelte';
	import type { Content } from '$lib/models/content';

	const guides: Content[] = [
		{
			title: 'Trước khi lũ đến',
			contents: [
				'Theo dõi thông báo thời tiết',
				'Dự trữ lương thực, nước sạch 3–5 ngày',
				'Chuẩn bị áo phao, dây thừng',
				'Kê cao đồ đạc, tắt cầu dao điện',
				'Chuẩn bị balo sơ cứu'
			]
		},
		{
			title: 'Khi lũ xảy ra',
			contents: [
				'Di chuyển đến nơi cao, an toàn',
				'Không cố đi qua nơi nước chảy mạnh',
				'Gửi tín hiệu cầu cứu nếu bị cô lập',
				'Tuyệt đối không bơi trong nước lũ',
				'Giữ liên lạc với chính quyền địa phương'
			]
		},
		{
			title: 'Sau khi lũ rút',
			contents: [
				'Khử trùng nước bằng Cloramin B',
				'Dọn vệ sinh, thu gom rác thải',
				'Kiểm tra điện trước khi sử dụng',
				'Không sử dụng thực phẩm đã ngâm nước'
			]
		}
	];
</script>

<SubContents subContents={guides} />
