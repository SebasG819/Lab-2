import data from "./components/dataHistory.js";
import data2 from "./components/dataPublic.js";
import * as components from "./components/index.js"

class Appcontainer extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((user)=>{
        this.shadowRoot.innerHTML += `
        <my-historycard name= "${user.name}" image= "${user.image}"></my-historycard>
        `
        ;})
        
        data2.forEach((user)=>{
            this.shadowRoot.innerHTML += `
            <my-publicationcard name= "${user.name}" image= "${user.image}" profileimg= "${user.profileimg}" likes= "${user.likes}" description= "${user.description}"></my-publicationcard>
            `
            ;})
    }

}

customElements.define("app-container", Appcontainer)