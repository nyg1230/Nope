import test from "./Components/test.js";

window.onload	= () => {
	let $app	= document.querySelector('#app');

	let aaa	= new test();
	aaa.render();
}