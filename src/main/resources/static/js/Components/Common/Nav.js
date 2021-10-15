export default class NopeNav extends HTMLElement {
    constructor() {
        super();

        this.innerHTML  = `
            나비
        `
    }

    connectedCallback() {
        
    }
}
customElements.define('nope-nav', NopeNav);