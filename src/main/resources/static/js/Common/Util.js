const modal = ($target, frame) => {

    if(!$target || !frame) return;

    let $modal      = document.createElement('modal');
    $modal.classList.add('modal-overlay');

    let $modalWindow    = document.createElement(frame);
    $modalWindow.classList.add('modal-window');
    
    $modal.appendChild($modalWindow);
    $target.appendChild($modal);

    $modal.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal-overlay')) {
            $target.removeChild($modal)
        }
    })
}

const jwt   = {
    name    : `X-TOKEN`,
	get token() {
		return sessionStorage.getItem(this.name);
	},
	set token(tokenStr) {
		sessionStorage.setItem(this.name, tokenStr);
	},
	get payload() {
		if(!this.token) return null;
		let base64Url	= this.token.split('.')[1];
		if(!base64Url) return null;
		let base64		= base64Url.replace(/-/g, '+')
									.replace(/_/g, '/');
		let jsonPayload	= decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));

		return JSON.parse(jsonPayload)
	},
	get expireDate() {
		return new Date(this.payload['exp'] *1000);
	},
    test    : function() {
		return !this.payload ? false : this.expireDate > new Date();
    }
}

const qs2obj	= () => {
	return location.search.replace(/^\?/, '').split('&').reduce((acc, k) => {
		let tmp	= k.split('=');
		acc[tmp[0]]	= tmp[1];
		return acc;
	}, {});
}

const getQsKey	= (key) => qs2obj()[key];

const setHistory	= (path, qs, data) => {
	let tmp	= !!qs ? qs.reduce((acc, p) => `${p[key]}=${value}&`, '?') : '';
	window.history.pushState(data, null, `${path}${tmp}`);
}

export {
    modal,
    jwt,
	setHistory,
	qs2obj,
	getQsKey
}