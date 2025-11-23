import type { Component } from 'svelte';
import Introduction from '$lib/tabs/introduction.svelte';
import Map from '$lib/tabs/map.svelte';
import Warning from '$lib/tabs/warning.svelte';
import Guide from '$lib/tabs/guide.svelte';
import Education from '$lib/tabs/education.svelte';
import Media from '$lib/tabs/media.svelte';

export class TabItem {
	constructor(
		public slug: string,
		public label: string,
		public component: Component
	) {}
}

export const tabItems = [
	new TabItem('', 'Giới thiệu', Introduction),
	new TabItem('map', 'Bản đồ lũ lụt', Map),
	new TabItem('warning', 'Cảnh báo - dự báo', Warning),
	new TabItem('guide', 'Hướng dẫn ứng phó', Guide),
	new TabItem('media', 'Góc truyền thông - giáo dục', Media),
	new TabItem('education', 'Góc học tập', Education)
];
