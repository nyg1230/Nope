import NopeFooter from "../Common/Footer.js";
import NopeHeader from "../Common/Header.js";
import NopeMain from "../Common/Main.js";
import NopeNav from "../Common/Nav.js";

export default class MainFrame extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML  = `
            <nope-header></nope-header>
            <nope-nav class='main-middle'></nope-nav>
            <nope-main class='main-middle'></nope-main>
            <nope-aside class='main-middle'></nope-aside>
            <nope-footer></nope-footer>
        `
		this.classList.add('grid')
		this.classList.add('main-grid')
    }
}

customElements.define('main-frame', MainFrame);