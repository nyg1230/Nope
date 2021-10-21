export default class NopeSignup extends HTMLElement {
	
	constructor() {
		super();
	}

	connectedCallback() {


		this.innerHTML	= `
			<div>${window.lang.sign.id}</div>
			<div>input</div>

			<div>${window.lang.sign.pw}</div>
			<div>input</div>

			<div>${window.lang.sign.signup.pwCheck}</div>
			<div>input</div>

			<div>${window.lang.sign.signup.email}</div>
			<div>input</div>

			<div>${window.lang.sign.signup.certifyCode}</div>

			<div>${window.lang.sign.signup.certifySend}</div>

			<div>${window.lang.sign.signup.certified}</div>
		`
	}

	doSignup() {

	}


}

customElements.define('nope-signup', NopeSignup)