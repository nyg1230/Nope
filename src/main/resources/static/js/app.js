import Ajax from "./Common/Ajax.js";
import Route from "./Core/Route.js";

window.onload	= () => {

	const initPromise	= lang => new Promise((res, rej) => {
		let ajax	= new Ajax();
		ajax.request({
			url		: '/lang-pack',
			type	: 'get',
			data	: {
				lang	: lang
			},
			success	: response => res(response),
			error	: (status, msg) => rej(status, msg)
		})
	})

	initPromise('kr').then(res => {
					Promise.all([
						import(res)
					])
					.then(([md1]) => {
						Object.keys(md1).forEach(k => window[k] = md1[k])
					})
					let $app	= document.querySelector('#app');
					new Route($app);
				})
				.catch((status, msg) => {
					console.log(status)
					console.log(msg)
				})

	
}