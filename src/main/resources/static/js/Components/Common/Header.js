import HTMLElementCustom from "../../Core/HTMLElementCustom.js";
import UserState from "../Header/UserState.js";

export default class NopeHeader extends HTMLElementCustom {
    
	template() {
		return '<user-state></user-state>'
	}
}
customElements.define('nope-header', NopeHeader);