import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ fetch, params }) => {
	async function getThread() {
		const response = await fetch(`/${params.board}/thread/${params.id}`);

		if (!response.ok) {
			throw error(404, {
				message: 'Not found'
			});
		}

		try {
			const thread = await response.json();
			return thread;
		} catch (e) {
			throw error(404, {
				message: 'Unexpected JSON token'
			});
		}
	}

	const thread = await getThread();
	return { thread };
}) satisfies PageLoad;
