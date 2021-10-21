import Ajax from "../../Common/Ajax.js";
import { modal } from "../../Common/Util.js";
import NopeSignup from "./signup.js";

export default class NopeLogin extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		
		this.innerHTML	= `
			<div class='login-header'>${window.lang.sign.signin.login}</div>

			<div class='login-id'>${window.lang.sign.id}</div>
			<div class='login-id-txt'><input type='text' id='txtAccount'></div>

			<div class='login-pw'>${window.lang.sign.pw}</div>
			<div class='login-pw-txt'><input type='password' id='txtPw'></div>

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
		let ajax    = new Ajax();
		ajax.request({
			url     : '/login',
			type    : 'get',
			data    : {
				account : id,
				pw      : pw
			},
			success : (res) => {
				console.log(res)
			}
		})
	}

	#goSignup() {
		let $parent	= this.parentNode;
		this.remove();

		let $signup	= document.createElement('nope-signup')
		$signup.classList.add('modal-window');
		$parent.appendChild($signup);
	}
}
customElements.define('nope-login', NopeLogin);