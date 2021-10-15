class customSample extends HTMLElement {

    static get observedAttributes() { return []; }

    constructor() { super(); }

    connectedCallback() {}
    disconnectedCallback() {}
    attributeChangeCallback(name, oldValue, newValue) {}
    adoptedCallback() {}

}

customElements.define('custom-sample', customSample)