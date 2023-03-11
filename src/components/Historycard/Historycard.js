class MyHistorycard extends HTMLElement{

    static get observedAttributes(){
        return["image","name"]
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
        <section class="stories">
            <img src="${this.image}">
            <h4>${this.name}</h4>
        </section>
        `;
    }
    }
}

customElements.define('my-historycard', MyHistorycard);
export default MyHistorycard