export default class HTMLElementCustom extends HTMLElement {
	
	constructor() {
		super();
		this.styles	= {};
		this.$root	= this.attachShadow({mode : 'open'});
		
		this.setup();
		this.setEvent();
	}

	connectedCallback() {
		this.$root.innerHTML	= `${this.style()}${this.template()}`;
		this.mounted();
	}
	
	setup() {}
	mounted() {}
	template() {
		return ``;
	}

	style() {
		const style	= this.styles;
		const text	= Object.keys(style).map(selector => `${selector}{${Object.keys(style[selector]).map(rule => `${rule}:${style[selector][rule]};`).join('')}}`).join('');
		return `<style>${text}</style>`
	}

	setEvent() {}
	addEvent(eventType, selector, callback) {
		const children	= [...this.$root.querySelectorAll(selector)];

		const _target	= target	=> children.includes(target) || target.closest(selector);
		
		this.$root.addEventListener(eventType, e => {
			if(!_target(e.target)) return false;
			callback(e);
		})
	}
}