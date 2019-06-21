class Component extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        const template = document.currentScript.ownerDocument.querySelector('template').content
        this.shadowRoot.appendChild(document.importNode(template, true))
    }
}