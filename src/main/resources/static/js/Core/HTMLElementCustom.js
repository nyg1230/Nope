export default class HTMLElementCustom extends HTMLElement {
	constructor() {
		super();
		this.setEvent();
	}

	setEvent() {}
	addEvent(eventType, selector, callback) {
		const children	= [...this.querySelectorAll(selector)];

		const _target	= target	=> children.includes(target) || target.closest(selector);

		this.addEventListener(eventType, e => {
			if(!_target(e.target)) return false;
			callback(e);
		})
	}
}