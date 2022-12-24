import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	async function getCatalog() {
		const response = await fetch('http://127.0.0.1:5173/a/api');
		const catalog = await response.json();
		return catalog;
	}

	const catalog = await getCatalog();
	return { catalog };
}) satisfies PageLoad;
