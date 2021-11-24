import Ajax from "../../Common/Ajax.js";
import { getQsKey, jwt, qs2obj, setHistory } from "../../Common/Util.js";
import HTMLElementCustom from "../../Core/HTMLElementCustom.js";
import Route from "../../Core/Route.js";
import NopeMain from "../Common/Main.js";

export default class BoardList extends HTMLElementCustom {

	setup() {
		let {type}	= {...qs2obj()};
		this.type	= type;
	}

	styles	= {
		'board-header'	: {
			'display'				: 'grid',
			'grid-template-columns' : '1fr',
			'text-align'			: 'right'
		},
		'board-header > *'	: {
			'border'	: 'solid 1px #000'
		},
		'board-body'	: {
			'display'				: 'grid',
			'grid-template-columns'	: '1fr 1fr 4fr 1fr 1fr',
			'text-align'			: 'center',
			'grid-gap'				: '3px'
		},
		'board-body > *'	: {
			'border'	: 'solid 1px #000'
		},
		'board-footer'	: {
			'display'				: 'grid',
			'grid-template-columns'	: '1fr 2fr 1fr',
			'text-align'			: 'center',
			'grid-gap'				: '3px'
		},
		'board-footer > *'	: {
			'border'	: 'solid 1px #000'
		}
	}

	template() {
		return `
			<board-header>
				<div class='board-title'>name</div>
				<div>
					${jwt.test() ?
						`<a class='write' href='/board/write?type=${this.type ?? ''}'>작성</a>` : ``
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
		this.addEvent('click', 'a', e => {
			e.preventDefault();
			const route	= Route.getRoutesByName('board-write');
			
			let $main	= document.querySelector('nope-main');
			if($main) {
				setHistory(route.path, {type : this.type});
				$main.setAttribute(NopeMain.routeName, route?.name)
			}
			
		})
	}

	mounted() {
		const $boardBody	= this.$root.querySelector('board-body');
		this.#getBoardListData('AA')
		.then(res	=> {
			$boardBody.innerHTML	+= this.#boardList(res)
		})
	}

	#boardList(list) {
		console.log(list)
		window.abc	= list
		return list.map(l => `
			<div>${l?.id}</div>
			<div>${l?.writer}</div>
			<div>${l?.title}</div>
			<div>testtest</div>
			<div>${l?.writeDate.toString()}</div>
		`).join('');
	}

	#getBoardListData(type, page) {
		return new Ajax().get(null, '/public/api/boards/list', {
			type	: type,
			page	: !!Number(page) ? Math.abs(page) : 1
		})
	}
}

customElements.define('board-list', BoardList);