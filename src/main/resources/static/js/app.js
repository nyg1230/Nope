import Ajax from "./Common/Ajax.js";
import { jwt } from "./Common/Util.js";
import User from "./Common/vo/User.js";
import Route from "./Core/Route.js";

window.onload	= () => {
	if(!window.app) window.app	 = {};

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
						setUser();
					
						let $app	= document.querySelector('#app');
						new Route($app);
					})
				})
				.catch((status, msg) => {
					console.log(status)
					console.log(msg)
				})
}

function setUser() {
	if(jwt.test()) {
		let currentUser	= new User(jwt.payload);
		window.app.currentUser=	 currentUser;
	}
}