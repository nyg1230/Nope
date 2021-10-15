import UserState from "../Header/UserState.js";

export default class NopeHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let $root  = this.attachShadow({mode : 'open'});
        $root.innerHTML = `
            <user-state></user-state>
        `
    }
}
customElements.define('nope-header', NopeHeader);