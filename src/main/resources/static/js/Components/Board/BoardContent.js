import HTMLElementCustom from "../../Core/HTMLElementCustom.js";

export default class BoardContent extends HTMLElementCustom {
	
	setup() {
		console.log('content')
		console.log(222)
	}

	template() {
		return '';
	}
}

customElements.define('board-content', BoardContent);