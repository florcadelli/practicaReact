import React, { Component } from 'react'

class Contador extends Component {
    constructor(props){
        super(props);
        this.state = {
            // numero:0
            numero: this.props.inicial
        }
        this.incrementar = this.incrementar.bind(this);
    }

    incrementar(){
        this.setState ({numero : this.state.numero + 1})
    }

    decrementar(){
        this.setState ({numero : this.state.numero - 1})
    }
    volverCero  = ()=> {
        this.setState ({numero : 0})
    }
    componentDidMount(){
        // console.log("Estoy en didMount")
    }
    componentDidUpdate(){
         console.log("Me actualice")
    }

    render() {
        // console.log("estoy en render")
        return (
            <div>
                <p>Soy el contador y mi state esta en: {this.state.numero}</p>
                {/* le paso el arrow function para poder acceder al scope de state u no usar bind */}
                {/* estamos obligados a usar la sintaxis de definir una funcion anonima, y ejecutar la funcion, no simplemente asociarla */}
                 <button onClick={ this.incrementar }>incrementar contador</button>
                 <button onClick={ ()=> this.decrementar()}>decrementar contador</button>
                 <button onClick={ this.volverCero }>poner en 0</button>
            </div> 
            
        )
    }
}
export default Contador;