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
            <style>
                @import url('/css/Frame/MainFrame.css');
            </style>

            <nope-header class='mcommon header'></nope-header>
            <nope-nav class='mcommon nav mcenter'></nope-nav>
            <nope-main class='mcommon main mcenter'></nope-main>
            <aside class='mcommon aside mcenter'></aside>
            <nope-footer class='mcommon footer'></nope-footer>
        `
    }
}

customElements.define('main-frame', MainFrame);