<script lang="ts">
	const boards = ['a', 'g', 'v'];
</script>

<span class="board-list">
	<span>[</span>
	{#each boards as board, index (board)}
		<a href={`/${board}`}
			>{board}
			{#if index !== boards.length - 1}
				<span class="divider">/</span>
			{/if}
		</a>
	{/each}
	<span>]</span>
</span>

<style>
	a,
	a:visited {
		text-decoration: none;
	}
	.divider {
		margin: 0 4px;
	}
</style>
