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
		this.addEvent('click', '.cate-1', e => {
			console.log(e.target)
		})
	}

	#getTemplate() {
		return this.#getMunu().map(m => `
			<div class='cate-0'>
				<span>${m['name']}</span>
				${m['list'].map(l => `<div class='cate-1'><span href='${m.path}'>${l['name']}</span></div>`).join('')}
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
					},
					{
						name	: '테수투',
						type	: 'a'
					}
				]
			}
		]

		return menu;
	}

}
customElements.define('nope-nav', NopeNav);