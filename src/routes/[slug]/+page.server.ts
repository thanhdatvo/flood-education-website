import type { EntryGenerator } from './$types';
import { tabItems } from '$lib/models/tab_item';

const slugs = tabItems
	.filter((item) => item.slug.length > 0)
	.map((item) => {
		return {
			slug: item.slug
		};
	});

export const entries: EntryGenerator = () => {
	return slugs;
	// return [{ slug: 'hello-world' }, { slug: 'another-blog-post' }];
};

export const prerender = true;
