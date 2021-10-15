import Route from "../../Core/Route.js";
import * as name from "./InnerFrameImportList.js";


export default class NopeMain extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const route     = Route.routes
        const tagName   = route.find(v => v.path === window.location.pathname)?.tagName;

        this.innerHTML  = tagName ? document.createElement(tagName).outerHTML : '메인'
    }
}
customElements.define('nope-main', NopeMain);