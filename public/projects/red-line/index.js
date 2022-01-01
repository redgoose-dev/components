class RedLine extends HTMLElement {

  constructor()
  {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback()
  {
    this.shadowRoot.innerHTML = 'sdgsg';
    this.style.display = 'block';
    this.style.border = '3px solid red';
  }

}

export default RedLine
