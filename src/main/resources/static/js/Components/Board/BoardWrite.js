import { jwt } from "../../Common/Util.js";
import HTMLElementCustom from "../../Core/HTMLElementCustom.js";

export default class BoardWrite extends HTMLElementCustom {
	
	setup() {
		console.log(jwt)
	}

	template() {
		return '';
	}
}

customElements.define('board-write', BoardWrite);