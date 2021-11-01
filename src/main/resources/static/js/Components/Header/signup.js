export default class NopeSignup extends HTMLElement {
	
	constructor() {
		super();
	}

	connectedCallback() {

		this.innerHTML	= `
			<div class='signup-header'>${window.lang.sign.signup.signup}</div>

			<div class='signup-body-1'>${window.lang.sign.id}</div>
			<div class='signup-body-2'><input type='text' id='txtAccount'></div>
			<div class='signup-body-3'>${window.lang.sign.signup.plzId}</div>

			<div class='signup-body-1'>${window.lang.sign.pw}</div>
			<div class='signup-body-2'><input type='password' id='txtPw'></div>
			<div class='signup-body-3'>${window.lang.sign.signup.plzPw}</div>

			<div class='signup-body-1'>${window.lang.sign.signup.pwCheck}</div>
			<div class='signup-body-2'><input type='password' id='txtPwCheck'></div>
			<div class='signup-body-3'></div>

			<div class='signup-body-1'>${window.lang.sign.signup.email}</div>
			<div class='signup-body-2-2'>
				<input type='text' id='emailAccount' name='email'>
				@
				<input type='text' id='emailDomain' name='email'>
			</div>

			<div class='signup-body-1'>${window.lang.sign.signup.certifyCode}</div>
			<div class='signup-body-2-2'>
				<input type='text' id='certifyCode'>
				<button>${window.lang.sign.signup.certifySend}</button>
			</div>

			<div class='signup-body-2-2'><button disabled>${window.lang.sign.signup.certified}</button></div>

			<div class='signup-footer'>
				<button id='doSignup'>${window.lang.sign.signup.doSignup}</button>
				<button id='goBack'>${window.lang.sign.signup.goBack}</button>
			</div>
		`

		this.#addListener();
	}

	#getEmail() {
		this.querySelectorAll('input[name="email"]').forEach(el => {
			console.log(el.value)
		})
	}

	#addListener() {

		let $doSignup	= this.querySelector('button#doSignup');
		$doSignup.addEventListener('click', () => {
			this.#doSignup();
		})
		
		let $goBack	= this.querySelector('button#goBack');
		$goBack.addEventListener('click', () => {
			this.#goBack();
		})
	}

	#doSignup() {
		console.log(Math.random())
	}

	#goBack() {
		let $parent	= this.parentNode;
		let $login	= document.createElement('nope-login');
		$login.classList.add('modal-window');

		this.remove();
		$parent.appendChild($login);
	}
}

customElements.define('nope-signup', NopeSignup)
