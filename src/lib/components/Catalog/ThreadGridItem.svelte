<script lang="ts">
	import { page } from '$app/stores';

	export let threadId: number;
	export let subject: string | undefined;
	export let comment: string | undefined;
	export let replies: number;
	export let images: number;
	export let tim: number;
	export let thumbnailHeight: number | undefined;
	export let thumbnailWidth: number | undefined;

	let { board } = $page.params;
	const src = `https://i.4cdn.org/g/${tim}s.jpg`;
	const link = `${board}/thread/${threadId}`;
</script>

<div class="thread" data-sveltekit-preload-data="off">
	<div class="thumbnail">
		<a href={link}>
			<img
				{src}
				alt=""
				loading="lazy"
				referrerpolicy="no-referrer"
				width={thumbnailWidth}
				height={thumbnailHeight}
			/>
		</a>
	</div>
	<div class="thread-meta">
		Replies: {replies}
		Images: {images}
	</div>

	<div class="teaser">
		{#if subject}
			<div class="thread-subject">
				<b>{subject}</b>
			</div>
		{/if}
		{#if comment}
			<div class="thread-comment">{@html comment}</div>
		{/if}
	</div>
</div>

<style>
	.thread {
		text-align: center;
	}
	.thread-meta {
		font-weight: 700;
		font-size: 0.9em;
	}
	.teaser {
		display: block;
	}
	.thread-comment {
		text-overflow: ellipsis;
		word-wrap: break-word;
		overflow: hidden;
		max-height: 7.6em;
		line-height: 1.8em;
	}
</style>
