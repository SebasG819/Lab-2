class MyPublicationcard extends HTMLElement{

    static get observedAttributes(){
        return["profileimg","name","image","likes","description"]
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue){
        if(oldValue !== newValue){
    this[propName] = newValue;
    this.render();}
    }

    render(){
        if(this.shadowRoot){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/Historycard/Historycard.css">
        <section>
            <label>
                <img src="${this.profileimg}">
                <p>${this.name}</p>
            </label>

            <img class="post" src="${this.image}">

            <label>
                
            </label>

            <section>
            <p>${this.likes}</p>
            <p>${this.name} ${this.description}</p>
            <p>Ver los comentarios</p>
            <input type="text" placeholder="Añade un comentario...">
            </section>

        </section>
        `;
    }
    }
}

customElements.define('my-publicationcard', MyPublicationcard);
export default MyPublicationcard