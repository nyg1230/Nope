import Component from "../../Core/Component.js";

export default class StockSearch extends Component {
	template() {
		return `
			<input type='text' id='txtTicker' placeholder='test'>
			<input type='button' id='btnTicker' value='search'>
		`
	}

	setEvent() {
		this.addEvent('click', '#btnTicker', () => {
			let $txtTicker	= this.$target.querySelector('#txtTicker');
			console.log($txtTicker.value)
		})
	}

	mounted() {
		let {search}	= {...this.props};
		console.log(search)
	}
}