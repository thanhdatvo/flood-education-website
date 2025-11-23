<script lang="ts">
	import Contents from '$lib/components/Contents.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import SubContents from '$lib/components/SubContents.svelte';
	import type { Content } from '$lib/models/content';

	const floodCauses: Content[] = [
		{
			title: 'Tự nhiên',
			contents: [
				'Mưa lớn kéo dài',
				'Bão, áp thấp nhiệt đới',
				'Vỡ đê, vỡ hồ chứa',
				'Địa hình đồi núi, độ dốc lớn'
			]
		},
		{
			title: 'Do con người',
			contents: [
				'Phá rừng',
				'Quá trình bê tông hoá đô thị',
				'Lấn chiếm lòng sông',
				'Xả thải, rác thải gây tắc nghẽn cống rãnh'
			]
		}
	];

	const floodTypes = [
		'Lũ quét: xảy ra rất nhanh, cuốn trôi tất cả.',
		'Lũ ống: xuất hiện trong các khe núi hẹp.',
		'Ngập lụt đô thị: do mưa lớn và cống thoát nước kém.',
		'Nước biển dâng: do bão mạnh, triều cường.'
	];

	const floodDamages: Content[] = [
		{
			title: 'Thiệt hại về người',
			contents: ['Tử vong, mất tích', 'Chấn thương do sạt lở, dòng nước xiết']
		},
		{
			title: 'Thiệt hại về tài sản',
			contents: ['Nhà cửa bị cuốn trôi', 'Mất đường xá, cầu cống', 'Phá hủy hoa màu, vật nuôi']
		},
		{
			title: 'Ảnh hưởng môi trường',
			contents: [
				'Nguồn nước ô nhiễm',
				'Rác thải ứ đọng',
				'Lây lan dịch bệnh (tả, thương hàn, tiêu chảy)'
			]
		},
		{
			title: 'Ảnh hưởng kinh tế – xã hội',
			contents: ['Mất việc tạm thời', 'Học sinh nghỉ học dài ngày', 'Gián đoạn giao thông']
		}
	];
</script>

<ul class="list-[upper-alpha] marker:font-bold [&>li]:pb-2">
	<li>
		<SectionTitle title="Lũ lụt là gì?" />
		Lũ lụt là hiện tượng nước từ sông, hồ, hoặc biển dâng cao bất thường, tràn ngập một vùng đất vốn
		khô ráo và gây ngập úng. Đây là một loại thiên tai phổ biến xảy ra do mưa lớn kéo dài, bão, triều
		cường, tuyết tan nhanh, hoặc vỡ đê, đập. Lũ lụt có thể gây thiệt hại nghiêm trọng về người và tài
		sản
	</li>
	<li>
		<SectionTitle title="Nguyên nhân gây lũ lụt" />
		<SubContents subContents={floodCauses} />
	</li>
	<li>
		<SectionTitle title="Các loại lũ" />
		<Contents contents={floodTypes} />
	</li>
	<li>
		<SectionTitle title="Tác hại của lũ lụt" />
		<SubContents subContents={floodDamages} />
	</li>
</ul>
