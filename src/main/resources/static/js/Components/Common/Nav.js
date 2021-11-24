import { setHistory } from "../../Common/Util.js";
import HTMLElementCustom from "../../Core/HTMLElementCustom.js";
import Route from "../../Core/Route.js";
import NopeMain from "./Main.js";

export default class NopeNav extends HTMLElementCustom {
    
	setEvent() {
		this.addEvent('click', 'a.category', e => {
			e.preventDefault();
			let $main	= document.querySelector('nope-main');
			let route	= Route.getRoutesByPath(e.target.pathname);

			setHistory(`${route.path}${e.target.search}`)
			$main.setAttribute(NopeMain.routeName, route.name);
			
		})
	}

	template() {
		return this.#getMunu().map(m => `
			<div class='cate-0'>
				<span>${m['name']}</span>
				${m['list'].map(l => `<div class=''><a class='category' href='${m.path}?type=${l.type}'>${l['name']}</a></div>`).join('')}
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
						type	: 'AA'
					}
				]
			}
		]

		return menu;
	}

}
customElements.define('nope-nav', NopeNav);