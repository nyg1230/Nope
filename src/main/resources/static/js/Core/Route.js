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
			name	: 'board',
			path	: '/board',
			tagName	: 'board-frame'
		}
	]

	static getRoutesByPath(path) {
		return Route.routes.filter(r => r['path'] === path)[0];
	}

	static getRoutesByName(name) {
		return Route.routes.filter(r => r['name'] === name)[0];
	}

}