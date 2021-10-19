import Ajax from "../../Common/Ajax.js";
import { modal } from "../../Common/Util.js";

export default class NopeLogin extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML  = `
            <table>
                <thead>
                    <tr>
                        <th colspan=2>로긴</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>아디</th>
                        <th>
                            <input type='text' id=''>
                        </th>
                    </tr>
                    <tr>
                        <th>비번</th>
                        <th>
                            <input type='password' id=''>
                        </th>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan=2>
                            <button id='btnLogin'>록인</button>
                        </th>
                    </tr>
                </tfoot>
            </table>
        `

        console.log(this)

        this.querySelector('#btnLogin').addEventListener('click', () => {
            let ajax    = new Ajax();
            ajax.request({
                url     : '/lang-pack',
                type    : 'get',
                success : (res) => {
                    console.log(res)
                }
            })
        })

    }
}
customElements.define('nope-login', NopeLogin);