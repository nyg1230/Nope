import MainFrame from "../Components/Frame/MainFrame.js";
import StockFrame from "../Components/Frame/StockFrame.js";

export default class Route{
	
	$target;

	constructor($target) {
		this.$target	= $target;


		let path	= window.location.pathname;
		let search	= window.location.search;
		let comp	= this.routes.find(v => v['path'] === path)?.comp;

		window.addEventListener('popstate', (e) => {
			console.log(e);
		})

		new MainFrame(this.$target, {
			comp	: comp,
			search	: search
		})
	}

	routes	= [
		{
			path	: '/stock',
			comp	: StockFrame
		}
	]

}