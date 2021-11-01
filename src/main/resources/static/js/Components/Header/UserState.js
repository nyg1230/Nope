import { jwt, modal } from "../../Common/Util.js";
import NopeTimer from "../Common/Timer.js";
import NopeLogin from "./Login.js";

export default class UserState extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML	= !!jwt.test() ? this.userinfoTmpl() : this.loginTmpl();
    }

    loginTmpl() {
		this.addEventListener('click', () => {
            modal(document.body, 'nope-login')
        })

		return `
			<button>test</button>
		`
    }

	userinfoTmpl() {
		
		let user	= window.app.currentUser;
		
		return `
			${user.account} 님 환영합니다.
			<nope-time></nope-time>
		`
	}
}
customElements.define('user-state', UserState);