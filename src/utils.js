export class Utils {
	static randomClassName(length = 8) {
		const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
		let result = '';
		result += characters[Math.floor(Math.random() * 26)];
		for (let i = 1; i < length; i++) {
			result += characters[Math.floor(Math.random() * characters.length)];
		}
		return result;
	}
}