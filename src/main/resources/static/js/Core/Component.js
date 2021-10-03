export default class Component {
	constructor($target, props) {
		this.$target	= $target;
		this.props		= props;
	}

	template	= () => ``;

	render() {
		console.log(this.template())
	}
}