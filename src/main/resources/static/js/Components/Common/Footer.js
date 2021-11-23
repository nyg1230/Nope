import HTMLElementCustom from "../../Core/HTMLElementCustom.js";

export default class NopeFooter extends HTMLElementCustom {
    template() {
		return '푸터'
	}
}

customElements.define('nope-footer', NopeFooter);