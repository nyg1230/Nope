import { jwt } from "./Util.js";

export default class Ajax {

    httpRequest;
    allowType;

    constructor() {
		if(!fetch) return;
	}

	get		= async (host, path, body, headers = {}) => {
		headers	= {
			...headers,
			...this.#defaultHeader()
		}

		return this.#request(host, path, body, headers, 'GET');
	}

	post	= async (host, path, body, headers = {}) => {
		headers	= {
			...headers,
			...this.#defaultHeader()
		}
		return this.#request(host, path, null, headers, 'POST')
	}

	put		= async (host, path, body, headers = {}) => {
		headers	= {
			...headers,
			...this.#defaultHeader()
		}
		return this.#request(host, path, body, headers, 'PUT')
	}

	delete	= async (host, path, body, headers = {}) => {
		headers	= {
			...headers,
			...this.#defaultHeader()
		}
		return this.#request(host, path, body, headers, 'DELETE')
	}

	#defaultHeader() {
		const headers	= {
			"Content-Type"	: "application/json"
		};
		headers[jwt.name]	= jwt.token;

		return headers;
	}

	#request	= async (host, path, body, headers, method) => {
		let url		= `${host ?? ''}${path}`;
		const options	= {
			method	: method,
			headers	: {
				...headers
			},
		}

		if(method === 'GET') url	+= body ? `?${Object.keys(body).map(k => `${k}=${body[k]}`).join('&')}` : ''
		else options['body'] = JSON.stringify(body);

		const res	= await fetch(url, options);
		const data	= await res.json();

		return res.ok ? data : Error(data);
	}
}