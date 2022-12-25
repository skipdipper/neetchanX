<script>
	import PostItem from '$lib/components/Thread/PostItem.svelte';
	export let posts;
</script>

<div class="thread">
	{#each posts as post}
		<PostItem
			postId={post.no}
			poster={post.name}
			comment={post.com}
			time={post.time}
			tim={post.tim}
			filename={post.filename}
			ext={post.ext}
			height={post.h}
			width={post.w}
		/>
	{/each}
</div>
