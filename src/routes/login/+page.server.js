import { userpass } from '$lib/auth.js';

export const actions = {
	'auth:signin': async ({ request }) => {
		try {
			const form_data = await request.formData();

			const email = form_data.get('email');
			const password = form_data.get('password');

			await userpass.login(email, password);
		} catch (err) {
			console.assert(err);
			throw err;
		}
	}
};
