export default class AuthService {
	private static password = 'pwd';

	public static authenticate(username: string, password: string) {
		username = username.toLowerCase();

		// mockup fetch to API

		if (!username)
			console.table({username, password});
		return this.password === password;
	}
}
