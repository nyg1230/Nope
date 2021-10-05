import Component from "../../Core/Component.js";
import StockSearch from "../Stock/StockSearch.js";

export default class StockFrame extends Component {
	template() {
		return `
			<stock-search></stock-search>
			<stock-result></stock-result>
		`
	}

	mounted() {
		let $stockSearch	= this.$target.querySelector('stock-search');
		let $stockResult	= this.$target.querySelector('stock-result');
		new StockSearch($stockSearch, {
			$stockResult	: $stockResult,
		})
	}
}