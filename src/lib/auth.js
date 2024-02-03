import { REALM_APP_ID } from '$env/static/private';
import Realm from 'realm-web';

export const app = new Realm.App({
	id: REALM_APP_ID
});

export const userpass = {
	login: async (email, password) => {
		try {
			const credentials = Realm.Credentials.emailPassword(email, password);
			const user = await app.logIn(credentials);
			return user;
		} catch (err) {
			throw err;
		}
	},
	register: async (email, password) => {
		try {
			await app.emailPasswordAuth.registerUser({ email, password });
			const credentials = Realm.Credentials.emailPassword(email, password);
			const user = await app.logIn(credentials);
			return user;
		} catch (err) {
			throw err;
		}
	}
};
