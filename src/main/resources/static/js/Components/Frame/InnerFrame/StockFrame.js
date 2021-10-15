export default class StockFrame extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML  = `
		
		`
    }
}

customElements.define('stock-frame', StockFrame);