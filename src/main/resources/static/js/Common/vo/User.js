export default class User {

	account;
	pw;
	email;
	enrollDate;
	lastLoginIp;

	constructor(p) {
		this.account		= p.account;
		this.pw				= p.pw;
		this.email			= p.email;
		this.enrollDate		= p.enrollDate;
		this.lastLoginIp	= p.lastLoginIp;
	}

	get account() { return this.account; }
	get email() { return this.email; }

	toJson() {
		return {
			account	: this.account,
			pw		: this.pw,
			email	: this.email,
		}
	}
}