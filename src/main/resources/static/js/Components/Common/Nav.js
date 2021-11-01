import { setHistory } from "../../Common/Util.js";
import HTMLElementCustom from "../../Core/HTMLElementCustom.js";
import Route from "../../Core/Route.js";

export default class NopeNav extends HTMLElementCustom {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML  = this.#getTemplate();
    }

	setEvent() {
		this.addEvent('click', 'a.category', e => {
			e.preventDefault();
			let $main	= document.querySelector('nope-main');
			let route	= Route.getRoutesByPath(e.target.pathname);

			$main.setAttribute('r', route.name);
			setHistory(route.path)
		})
	}

	#getTemplate() {
		return this.#getMunu().map(m => `
			<div class='cate-0'>
				<span>${m['name']}</span>
				${m['list'].map(l => `<div class=''><a class='category' href='${m.path}'>${l['name']}</a></div>`).join('')}
			</div>
		`).join('');
	}
	
	#getMunu() {
		let menu	= [
			{
				name	: '게시판',
				path	: '/board',
				list	: [
					{
						name	: '사진',
						type	: 'p'
					}
				]
			}
		]

		return menu;
	}

}
customElements.define('nope-nav', NopeNav);