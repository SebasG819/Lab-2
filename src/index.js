import * as components from "./components/index.js"
import dataleft from "./data.js"
import data2 from "./dataPublic.js"
import data from "./dataHistory.js"



class appcontainer extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"})

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



                dataleft.forEach((user) => {

                    this.shadowRoot.innerHTML +=
                    `
        
                        <my-profile name= "${user.name}"   img= "${user.img}"></my-profile>
        
                    `
                })     

    }

}

customElements.define("app-container", appcontainer);

