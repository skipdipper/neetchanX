<script lang="ts">
	export let postId: number;
	export let poster: string;
	export let subject: string | undefined;
	export let comment: string | undefined;
	export let time: number;
	export let tim: number | undefined;
	export let filename: string | undefined;
	export let ext: string | undefined;
	export let height: number | undefined;
	export let width: number | undefined;
	export let thumbnailHeight: number | undefined;
	export let thumbnailWidth: number | undefined;

	const thumbnailUrl = `https://i.4cdn.org/g/${tim}s.jpg`;
	const fileUrl = `https://i.4cdn.org/g/${tim}${ext}`;
	const localeTime = new Date(time * 1000).toLocaleString('en-US', {
		hourCycle: 'h23'
	});
	const link = `p${postId}`;

	let isExpanded = false;
	$: display = isExpanded ? 'none' : null;
	function toggleExpand() {
		isExpanded = !isExpanded;
	}
</script>

<div class="post" id={link}>
	<div class="post-info">
		{#if subject}
			<span class="post-subject">{subject}</span>
		{/if}
		<span class="poster">{poster}</span>
		<span class="post-date">{localeTime}</span>
		<span class="post-id">
			<a href={`#${link}`} title="Link to this post">No.</a>
			{postId}
		</span>
	</div>
	<div class="post-content" class:image-expanded={isExpanded}>
		{#if tim}
			<div class="file-info">
				<a href={fileUrl} referrerpolicy="no-referrer">{filename}{ext}</a>
				({width}x{height})
			</div>
			<div class="thumbnail" on:click={toggleExpand} on:keydown={toggleExpand}>
				<a href={fileUrl} target="_blank" rel="noreferrer" on:click|preventDefault>
					<img
						src={thumbnailUrl}
						alt=""
						loading="lazy"
						referrerpolicy="no-referrer"
						style:display
						width={thumbnailWidth}
						height={thumbnailHeight}
					/>
					{#if isExpanded}
						<img
							src={fileUrl}
							alt=""
							loading="lazy"
							referrerpolicy="no-referrer"
							{width}
							{height}
						/>
					{/if}
				</a>
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
		padding: 4px;
	}
	.post-subject {
		color: #b294bb;
		font-weight: 700;
	}
	.poster {
		font-weight: 700;
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
	.image-expanded .post-comment {
		clear: left;
	}
</style>
