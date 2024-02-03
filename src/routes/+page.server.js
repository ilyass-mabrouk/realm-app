import { app } from '$lib/auth';

export const load = ({ locals }) => {
	const { user } = locals;

	return { user };
};

export const actions = {
	'auth:logout': async () => {
		try {
			await app.currentUser?.logOut();
		} catch (err) {
			console.assert(err);
			throw err;
		}
	}
};
