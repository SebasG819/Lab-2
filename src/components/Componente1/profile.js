class profile extends HTMLElement {

    static get observedAttributes(){

        return["img", "name",];   
    }

constructor(){

    super()
    this.attachShadow({mode:"open"});

}

attributeChangedCallback(propName, oldvalue, Newvalue){
    this[propName] = Newvalue;
    this.render();
}
connectedCallback(){

    this.render();

}

render(){
 this.shadowRoot.innerHTML =
  `
    <section> 
    <link rel="stylesheet" href="./src/components/Componente1/style .css">
    <button> 
    ${this.name}
    <img src="${this.img}">
    </button>
    </section>
 `
}
}
customElements.define("my-profile", profile);
export default profile
