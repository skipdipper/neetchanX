<script lang="ts">
	export let postId: number;
	export let poster: string;
	export let comment: string | undefined;
	export let time: number;
	export let tim: number | undefined;
	export let filename: string | undefined;
	export let ext: string | undefined;
	export let height: number | undefined;
	export let width: number | undefined;

	const thumbnailUrl = `https://i.4cdn.org/g/${tim}s.jpg`;
	const fileUrl = `https://i.4cdn.org/g/${tim}${ext}`;
	const localeTime = new Date(time * 1000).toLocaleString('en-US', {
		hourCycle: 'h23'
	});
	const link = `p${postId}`;
</script>

<div class="post" id={link}>
	<div class="post-info">
		<span class="poster">{poster}</span>
		<span class="post-date">{localeTime}</span>
		<span class="post-id">
			<a href={`#${link}`} title="Link to this post">No.</a>
			{postId}
		</span>
	</div>
	<div class="post-content">
		{#if tim}
			<div class="file-info">
				<a href={fileUrl} referrerpolicy="no-referrer">{filename}{ext}</a>
				({width}x{height})
			</div>
			<div class="thumbnail">
				<img src={thumbnailUrl} alt="" loading="lazy" referrerpolicy="no-referrer" />
			</div>
		{/if}

		{#if comment}
			<div class="post-comment">{@html comment}</div>
		{/if}
	</div>
</div>

<style>
	.post {
		border: 1px solid;
		margin: 4px 0;
	}
	.post-id a {
		color: inherit;
		text-decoration: none;
	}
	.post-content {
		overflow: hidden;
	}
	.file-info {
		margin-bottom: 4px;
	}
	.thumbnail {
		float: left;
		margin-right: 10px;
	}
</style>
