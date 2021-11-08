import { jwt } from "../../Common/Util.js";

export default class BoardWrite extends HTMLElementCustom {
	constructor() {
		super();
	}

	connectedCallback() {
		console.log(jwt.test())
		this.innerHTML	= this.#template();
	}

	#template() {
		return `

		`
	}

}

customElements.define('board-write', BoardWrite);