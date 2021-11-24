import Ajax from "../../Common/Ajax.js";
import { jwt } from "../../Common/Util.js";
import HTMLElementCustom from "../../Core/HTMLElementCustom.js";

export default class BoardWrite extends HTMLElementCustom {
	
	setup() {
		this.kkoScript		= document.createElement('script');
		const apiKey		= '7c640246a6e5ab60531d33745c010be1';
		this.kkoScript.type	= 'text/javascript';
		this.kkoScript.src	= `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}`;
	}

	styles	= {
		'.grid'	: {
			'display'	: 'grid',
			border	: 'solid 1px #099'
		},
		'write-header'	: {
			'grid-template-columns'	: '1fr',
		},
		'write-body'	: {
			'grid-template-columns'	: '1fr',
			'margin'	: '1px',
		},
		'write-footer'	: {
			'grid-template-columns'	: '1fr'
		},
		'#map' : {
			width	: '100%',
			height	: '400px'
		},
		'#editor'	: {
			width	: 'auto',
			resize	: 'none'
		}
	}

	template() {
		return `
		<write-header class='grid'>

		</write-header>

		<write-body class='grid'>
			<div id='map'></div>
		</write-body>

		<write-body class='grid'>
			<div><textarea id='editor'></textarea></div>
		</write-body>

		<write-footer class='grid'>
			<div>
				<button></button>
				<button></button>
			</div>
		</write-footer>
		`
	}

	mounted() {
		fetch(`https://dapi.kakao.com/v2/maps/sdk.js?appkey=7c640246a6e5ab60531d33745c010be1`, {
			method:'get',
			headers	: {
				'Access-Control-Allow-Origin': '*'
			}
		})
			.then(res => {
				console.log(res)
			})
		this.addScript().then(() => {
			this.kkoScript.addEventListener('load', () => {
				const $map		= this.$root.querySelector('#map');
				const options	= {
					center	: new kakao.maps.LatLng(33.450701, 126.570667),
					level	: 3
				};
	
				this.kkoMap	= new kakao.maps.Map($map, options);
			})
		})
		
	}

	addScript	= async () => {
		document.head.prepend(this.kkoScript.outerHTML)
	}
}

customElements.define('board-write', BoardWrite);