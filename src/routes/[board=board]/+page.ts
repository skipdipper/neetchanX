import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ fetch, params }) => {
	async function getCatalog() {
		const response = await fetch(`/${params.board}/api`);

		if (!response.ok) {
			throw error(404, {
				message: 'Not found'
			});
		}

		try {
			const catalog = await response.json();
			return catalog;
		} catch (e) {
			throw error(404, {
				message: 'Unexpected JSON token'
			});
		}
	}

	const catalog = await getCatalog();
	return { catalog };
}) satisfies PageLoad;
