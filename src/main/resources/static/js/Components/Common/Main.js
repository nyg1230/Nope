import Route from "../../Core/Route.js";
import * as name from "./InnerFrameImportList.js";


export default class NopeMain extends HTMLElement {

	static get observedAttributes() { return ['r']; }

    constructor() {
        super();
    }

    connectedCallback() {
        const route     = Route.getRoutesByPath(window.location.pathname);
		this.innerFrameChange(route?.name);
    }
	
	attributeChangedCallback(name, oldValue, newValue) {
		if(name === 'r') {
			this.innerFrameChange(newValue);
		}
	}

	innerFrameChange(routeName) {
		let route	= Route.getRoutesByName(routeName);
		this.innerHTML	= '';
		let $innerFrame	= document.createElement(!!route ? route.tagName : 'div');
		this.appendChild($innerFrame);
	}
}
customElements.define('nope-main', NopeMain);