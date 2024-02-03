import { app } from '$lib/auth';

export const handle = ({ resolve, event }) => {
	const { locals } = event;

	const user = app.currentUser?.profile;

	locals.user = user;

	return resolve(event);
};
