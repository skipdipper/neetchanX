<script lang="ts">
	export let subject: string;
	export let comment: string;
	export let replies: number;
	export let images: number;
	export let tim: number;

	const src = `https://i.4cdn.org/g/${tim}s.jpg`;
</script>

<div class="thread">
	<div class="thread-image">
		<img {src} alt="" loading="lazy" referrerpolicy="no-referrer" />
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
