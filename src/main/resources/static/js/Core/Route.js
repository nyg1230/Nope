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
		this.$target.innerHTML	= document.createElement('main-frame').outerHTML;
	}

	static routes	= [
		{
			path	: '/stock',
			tagName	: 'stock-frame'
		}
	]

}