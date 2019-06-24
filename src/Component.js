class Component extends HTMLElement {
    constructor() {
        super();
        this.ownerDoc = document.currentScript.ownerDocument;
        this.shadowRoot.appendChild(document.importNode(template, true));
    }
}
