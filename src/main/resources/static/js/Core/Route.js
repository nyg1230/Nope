import MainFrame from "../Components/Frame/MainFrame.js";

export default class Route{
	
	$target;

	constructor($target) {
		this.$target	= $target;

		window.addEventListener('popstate', () => {
			this.render();
		})

		this.render();
	}

	render() {
		this.$target.innerHTML	= '';
		this.$target.appendChild(document.createElement('main-frame'));
	}

	static routes	= [
		{
			path	: '/stock',
			tagName	: 'stock-frame'
		},
		{
			path	: '/board',
			tagName	: 'board-frame'
		}
	]

	static getRoutes(path) {
		return Route.routes.filter(r => r['path'] === path)[0];
	}

}