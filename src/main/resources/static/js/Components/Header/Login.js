import Ajax from "../../Common/Ajax.js";
import { jwt, modal } from "../../Common/Util.js";
import NopeSignup from "./signup.js";

export default class NopeLogin extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		
		this.innerHTML	= `
			<div class='login-header'>${window.lang.sign.signin.login}</div>

			<div class='login-body-1'>${window.lang.sign.id}</div>
			<div class='login-body-2'><input type='text' id='txtAccount'></div>

			<div class='login-body-1'>${window.lang.sign.pw}</div>
			<div class='login-body-2'><input type='password' id='txtPw'></div>

			<div class='login-footer'>
				<button id='btnLogin'>${window.lang.sign.signin.login}</button>
				<button id='btnSignup'>${window.lang.sign.signup.signup}</button>
			</div>
		`

		this.classList.add('grid');
		this.classList.add('login-grid');

		this.addLisener();
	}



	addLisener() {
		this.querySelector('#btnLogin').addEventListener('click', () => {
			let $account	= this.querySelector('input#txtAccount');
			let $pw     	= this.querySelector('input#txtPw');
			this.#doLogin($account.value.trim(), $pw.value.trim());
		});

		this.querySelector('#btnSignup').addEventListener('click', () => {
			this.#goSignup();
		})
	}

	#doLogin(id, pw) {
		
		new Ajax().get(null, '/login', {
			account : id,
			pw      : pw
		})
		.then(res => {
			console.log(res)
			let result	= res['X-TOKEN'] ?? res['errorCode']
				jwt.token	= result;
				if(jwt.test()) {
					alert('success');
					location.reload();
				} else {
					alert('nope')
				}
		})
		.catch((status, msg) => {
			console.log(status);
			console.log(msg);
		})
	}

	#goSignup() {
		let $parent	= this.parentNode;
		this.remove();

		let $signup	= document.createElement('nope-signup')
		$signup.classList.add('modal-window');
		$signup.classList.add('signup-grid');
		$parent.appendChild($signup);
	}
}
customElements.define('nope-login', NopeLogin);