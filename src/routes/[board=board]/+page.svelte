<script lang="ts">
	import type { PageData } from './$types';
	import ThreadGridItem from '$lib/components/Catalog/ThreadGridItem.svelte';
	export let data: PageData;
</script>

<div id="threads">
	{#each data.catalog[0].threads as post}
		<ThreadGridItem
			threadId={post.no}
			subject={post.sub}
			comment={post.com}
			replies={post.replies}
			images={post.images}
			tim={post.tim}
			thumbnailHeight={post.tn_h}
			thumbnailWidth={post.tn_w}
		/>
	{/each}
</div>

<style>
	#threads {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 10px;
		margin: 0 auto;
	}
</style>
