import Ajax from "./Common/Ajax.js";
import { jwt } from "./Common/Util.js";
import User from "./Common/vo/User.js";
import Route from "./Core/Route.js";

window.onload	= () => {
	if(!window.app) window.app	 = {};

	new Ajax().get(null, '/lang-pack')
	.then(data => {
		const url	= data['url'];

		Promise.all([
			import(url)
		])
		.then(([md1]) => {
			Object.keys(md1).forEach(k => window[k] = md1[k])
			setUser();
		
			let $app	= document.querySelector('#app');
			new Route($app);
		})
	})

}

function setUser() {
	if(jwt.test()) {
		let currentUser	= new User(jwt.payload);
		window.app.currentUser=	 currentUser;
	}
}