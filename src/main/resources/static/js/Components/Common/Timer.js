import Ajax from "../../Common/Ajax.js";
import { jwt } from "../../Common/Util.js";
import HTMLElementCustom from "../../Core/HTMLElementCustom.js";

export default class NopeTimer extends HTMLElementCustom {

	#timerSeq;

	connectedCallback() {

		this.innerHTML	= `
			남은시간 <span class='timer'>--:--</span> <button id='test'>test</button>
		`

		let $timer	= this.querySelector('.timer');
		this.#timer($timer)
	}

	setEvent() {
		this.addEvent('click', '#test', () => {
			this.#reissuance();
		})
	}

	#timer($target) {
		this.#timerSeq	= window.setInterval(() => {
			let timeGap	= jwt.expireDate.getTime() - new Date().getTime();

			if(timeGap < 0) window.clearInterval(this.#timerSeq);

			$target.innerHTML	= `${this.#toTime(timeGap)}`;
		}, 1000);
	}

	#toTime(time) {

		let min	= parseInt(time / 1000 / 60);
		let sec	= parseInt(time / 1000 % 60);
		return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
	}

	#reissuance() {
		let ajax	= new Ajax();

		ajax.request({
			url		: '/token-reissuance',
			type	: 'post',
			success	: (res) => {
				console.log(res)
				let token	= JSON.parse(res);
				jwt.token	= token[jwt.name];
				console.log(jwt.payload)
			},
			error	: (status, msg) => {

			}
		})
	}



}

customElements.define('nope-time', NopeTimer);