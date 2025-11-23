<script lang="ts">
	import { resolve } from '$app/paths';
	import { tabItems, type TabItem } from '$lib/models/tab_item';

	let items: TabItem[] = tabItems;
	let { slug } = $props();
</script>

<nav
	class=" top-0 left-0 right-0 px-6 py-4 bg-blue-50 backdrop-blur-sm text-white flex justify-between items-center"
>
	<ul>
		{#each items as item (item.slug)}
			<li class={{ active: slug === item.slug, 'hover:bg-white': true }}>
				<span>
					<a href={resolve(`/${item.slug}`)}>{item.label}</a>
				</span>
			</li>
		{/each}
	</ul>
</nav>
{#each items as item (item.slug)}
	{#if slug == item.slug}
		<div class="box">
			<item.component />
		</div>
	{/if}
{/each}

<style>
	.box {
		/* margin-bottom: 10px; */
		padding: 40px;
		border: 1px solid #dee2e6;
		border-radius: 0 0 0.5rem 0.5rem;
		border-top: 0;
		background-color: #fff;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		padding-left: 0;
		margin-bottom: 0;
		list-style: none;
		/* border-bottom: 1px solid #dee2e6; */
	}
	li {
		margin-bottom: -1px;
	}

	span {
		border: 1px solid transparent;
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
		display: block;
		padding: 0.5rem 1rem;
		cursor: pointer;
	}

	span:hover {
		border-color: #e9ecef #e9ecef #dee2e6;
	}

	li.active > span {
		color: #495057;
		background-color: #fff;
		border-color: #dee2e6 #dee2e6 #fff;
	}
</style>
