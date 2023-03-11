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
//asi Jhayco pero no se perdio el boton
render(){
 this.shadowRoot.innerHTML =
  `  
    <section>
    <link rel="stylesheet" href="./src/components/Componente2/style.css">
    ${this.name}
    </section>
    <section>
    <img src="${this.image}">
    </section>
    <button> Seguir </button>
    
 `
}
}
customElements.define("my-card", profile);
export default profile
