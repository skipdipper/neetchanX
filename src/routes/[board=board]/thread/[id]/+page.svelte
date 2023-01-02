<script lang="ts">
	import type { PageData } from './$types';
	import Thread from '$lib/components/Thread/Thread.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<meta name="referrer" content="no-referrer" />
</svelte:head>
<Thread posts={data.thread.posts} />
