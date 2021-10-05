import Route from "./Core/Route.js";

window.onload	= () => {
	let $app	= document.querySelector('#app');

	new Route($app);
}