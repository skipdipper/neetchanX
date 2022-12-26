<script lang="ts">
	import Navbar from '$lib/components/Layout/Navbar.svelte';
</script>

<header>
	<Navbar />
</header>
<main>
	<slot />
</main>
<footer>
	<Navbar />
</footer>
