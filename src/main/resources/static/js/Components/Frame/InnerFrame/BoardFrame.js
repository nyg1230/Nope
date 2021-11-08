import Ajax from "../../../Common/Ajax.js";
import { jwt } from "../../../Common/Util.js";
import HTMLElementCustom from "../../../Core/HTMLElementCustom.js";

export default class BoardFrame extends HTMLElementCustom {

    connectedCallback() {
        // this.innerHTML  = this.#getTemplate();
		// this.#getBoardList()
		this.#render();
    }
	
	#render() {
		this.#getBoardList()
				.then(list => {
					this.innerHTML	= this.#getTemplate(list);
				})
				.catch((status, msg) => {
					console.log(status);
					console.log(msg);
				})
	}

	#getTemplate(list) {
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
				${!!list ?
					list.map(b => `
					<div class='board-body-0'>${b?.id}</div>
					<div class='board-body-1'>${b?.writer}</div>
					<div class='board-body-2'>${b?.title}</div>
					<div class='board-body-2'>${'aaa'}</div>
					<div class='board-body-3'>${b?.writeDate}</div>
					`).join('')
					: 
					`
					
					`
				}
			</board-body>
			<board-footer>
				<div>empty</div>
				<div class='pagination'>page</div>
				<div class='search'>search</div>
			</board-footer>
			
		`
	}

	#getBoardList() {
		return new Promise((res, rej) => {
			let ajax	= new Ajax();
			ajax.request({
				url		: '/public/api/boards/list',
				type	: 'get',
				data	: {
					page	: 1
				},
				success	: result => {
					let list	= JSON.parse(result);
					res(list);
				},
				error	: (status, msg) => {
					rej(status, msg);
				}
			})
		})
	}

	setEvent() {
		this.addEvent('click', '#btnWrite', e => {
			console.log('test')
		})
	}
}

customElements.define('board-frame', BoardFrame);