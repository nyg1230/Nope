import Ajax from "../../Common/Ajax.js";
import { getQsKey, jwt, qs2obj } from "../../Common/Util.js";
import HTMLElementCustom from "../../Core/HTMLElementCustom.js";
import Route from "../../Core/Route.js";
import NopeMain from "../Common/Main.js";

export default class BoardList extends HTMLElementCustom {

	connectedCallback() {
		this.render();
	}

	render() {
		const type	= getQsKey('type');
		this.#getBoardList(type, 1)
			.then((list) => {
				console.log(type)
				this.innerHTML	= this.#template(list, type);
			})
			.catch((status, msg) =>{
				console.log('%s\n%s', status, msg);
			})

		
	}

	setEvent() {
		this.addEvent('click', '.write', e => {
			let $main	= document.querySelector('nope-main');
			if(!!$main) {
				$main['r']	= Route.name;
			}
			console.log($main)
		})
	}

	#template(list, type) {
		return `
			<board-header>
				<div class='board-title'>name</div>
				<div>
					${jwt.test() ?
						`
						<a class='' href='/board/write?type=${type ?? ''}'>작성</a>
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

	#getBoardList(type, page) {
		let ajax	= new Ajax();
		return new Promise((res, req) => {
			ajax.request({
				url		: '/public/api/boards/list',
				type	: 'get',
				data	: {
					type	: type,
					page	: !!Number(page) ? Math.abs(page) : 1
				},
				datatype: 'json',
				success	: result	=> {
					res(result);
				},
				error	: (status, msg) => {
					req(status, msg);
				}
			})
		})
		
	}
}

customElements.define('board-list', BoardList);