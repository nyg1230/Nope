import Component from "../../Core/Component.js";
import Footer from "../Common/Footer.js";
import Header from "../Common/Header.js";
import Navig from "../Common/Navig.js";

export default class MainFrame extends Component {

	setup() {}

	template() {
		return `
			<link rel='stylesheet' href='/css/Frame/MainFrame.css'>
			<header class='mcommon'></header>
			<nav class='mcommon mcenter'></nav>
			<main class='mcommon mcenter'></main>
			<aside class='mcommon mcenter'></aside>
			<footer class='mcommon'></footer>
		`
	}

	mounted() {
		let {comp, search}	= {...this.props};

		let $header	= this.$target.querySelector('header');
		new Header($header);

		let $nav	= this.$target.querySelector('nav');
		new Navig($nav)
		
		let $main	= this.$target.querySelector('main');
		if(comp) new comp($main, { search : search});

		let $footer	= this.$target.querySelector('footer');
		new Footer($footer);
	}
}