import HTMLElementCustom from "../../Core/HTMLElementCustom.js";
import Route from "../../Core/Route.js";
import * as name from "./InnerFrameImportList.js";


export default class NopeMain extends HTMLElementCustom {

	static routeName	= 'r';
	static get observedAttributes() { return [this.routeName]; }

	setup() {
		this.route     = Route.getRoutesByPath(window.location.pathname);
	}

	template() {
		return this.getComponent(this.route).outerHTML;
	}

	attributeChangedCallback(name, oldValue, newValue) {
		// 차후 변경
		if(name === NopeMain.routeName) {
			const route	= Route.getRoutesByName(newValue);
			const component	= this.getComponent(route);
			this.$root.innerHTML	= component.outerHTML;
		}
	}

	getComponent(route) {
		return document.createElement(route?.tagName ?? 'div');
	}

}
customElements.define('nope-main', NopeMain);