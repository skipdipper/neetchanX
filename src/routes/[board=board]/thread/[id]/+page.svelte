<script lang="ts">
	import type { PageData } from './$types';
	import Thread from '$lib/components/Thread/Thread.svelte';

	export let data: PageData;
</script>

<Thread posts={data.thread.posts} />
