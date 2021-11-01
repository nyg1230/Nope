import { jwt } from "../../../Common/Util.js";
import HTMLElementCustom from "../../../Core/HTMLElementCustom.js";

export default class BoardFrame extends HTMLElementCustom {

    connectedCallback() {
        this.innerHTML  = this.#getTemplate();
    }
	
	#getTemplate() {
		return `
			<board-header>
				<div class='board-title'>name</div>
				<div>
					${jwt.test() ?
						`
						<button id='btnWrite' class='btn board-write'>작성</button>
						`
						:
						`
						`
					}
				</div>
			</board-header>
			<board-body>
				<div class='board-body-0'>번호</div>
				<div class='board-body-1'>작성자</div>
				<div class='board-body-2'>제목</div>
				<div class='board-body-2'>조회수</div>
				<div class='board-body-3'>작성일</div>
			</board-body>
			<board-footer>
				<div>empty</div>
				<div class='pagination'>page</div>
				<div class='search'>search</div>
			</board-footer>
			
		`
	}

	setEvent() {
		this.addEvent('click', '#btnWrite', e => {
			console.log('test')
		})
	}
}

customElements.define('board-frame', BoardFrame);