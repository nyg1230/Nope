import { jwt, modal } from "../../Common/Util.js";
import NopeLogin from "./Login.js";

export default class UserState extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log(jwt.get())

        !!jwt.test() ? 'a' : this.templ();

        !!jwt.test() ? {} : {};
    }

    templ() {
        this.innerHTML  = `<button>test</button>`
        this.addEventListener('click', () => {
            modal(document.body, 'nope-login')
        })
    }
}
customElements.define('user-state', UserState);