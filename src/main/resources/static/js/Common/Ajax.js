import { jwt } from "./Util.js";

export default class Ajax {

    httpRequest;
    allowType;

    constructor() {
        if(window.XMLHttpRequest) this.httpRequest = new XMLHttpRequest();
        else return null;

        this.allowType   = ['GET', 'POST', 'PUT', 'DELETE'];
    }

    request(p) {

        this.#requestHandling(p.success, p.error, p.beforesend, p.complate);

        p.type  = p.type == null || this.allowType.includes(p.type.toUpperCase()) === false ? 'GET' : p.type;
        p.type  = p.type.toUpperCase();

        p.data  = this.#mkQuerySting(p.data);
        p.url   = p.type === 'GET' ? `${p.url}${p.data}` : p.url

        

        this.httpRequest.open(p.type, p.url, p.async === undefined ? true : p.async);
		this.#setHeader(p.headers);
        this.httpRequest.send(p.type === 'GET' ? null : p.data);

    }

    #requestHandling(success, error, beforesend, complate) {
        this.httpRequest.addEventListener('readystatechange', () => {

            typeof beforesend === 'function' ? beforesend() : '';

            try {
                if (this.httpRequest.readyState === XMLHttpRequest.DONE) {
                    if (this.httpRequest.status === 200) {
                        typeof success === 'function' ? success(this.httpRequest.responseText) : '';
                    } else {
                        console.log(this.httpRequest);
                        typeof error === 'function' ? error() : '';
                    }
                }
            } catch( e ) {
                console.error(e);
            }

            typeof complate === 'function' ? complate() : '';

        });
    }

    #setHeader(headers) {
		this.httpRequest.setRequestHeader(jwt.name, jwt.token);

        if(headers == null || typeof headers === 'object') return;

        Object.keys(headers).forEach(header => {
            let value   = headers[header];
            this.httpRequest.setRequestHeader(header, value);
        })
    }

    #mkQuerySting(data) {
        return data == null || typeof data !== 'object' ? '' : Object.keys(data).reduce((acc, k) => `${acc}${k}=${encodeURIComponent(data[k])}&`, '?');
    }

    
}