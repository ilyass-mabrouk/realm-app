import { error, redirect } from '@sveltejs/kit';

import { app } from '$lib/auth';

export const load = () => {
	error(404, 'Not found');
};

export const actions = {
	default: async () => {
		try {
			await app.currentUser?.logOut();
			redirect(302, '/');
		} catch (err) {
			console.assert(err);
			throw err;
		}
	}
};
