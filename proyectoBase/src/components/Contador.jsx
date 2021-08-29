import React, { Component } from 'react'

class Contador extends Component {
    constructor(props){
        super(props);
        this.state = {
            numero:props.inicial
        }
    }

    incrementar(){
        this.setState ({numero : this.state.numero + 1})
    }

    decrementar(){
        this.setState ({numero : this.state.numero - 1})
    }

    render() {
        console.log("estoy renderizando")
        return (
            <div>
                <p>Soy el contador y mi state esta en: {this.state.numero}</p>
                 <button onClick={ ()=> this.incrementar()}>incrementar contador</button>
                 <button onClick={ ()=> this.decrementar()}>decrementar contador</button>
            </div> 
            
        )
    }
}
export default Contador;