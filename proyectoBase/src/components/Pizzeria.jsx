import React, { Component } from 'react'
import Pedido from "../components/Pedido";



class Pizzeria extends Component {
    /* ------------------------------- constructor ------------------------------ */
    constructor(){
        super();
        this.state = {
            pedido: " ",
            show : true
        }
        
    }
   /* -------------------------------- funciones ------------------------------- */
    
   
    cancelarPedido  = ()=> {
        console.log("cancelando pedido")
        this.setState ({show : false})
        setTimeout(() => {
            this.setState({show : true})
          }, 2000)
    }
   
  /* ------------------------------ ciclo de vida ----------------------------- */


/* --------------------------------- render --------------------------------- */
    render() {
        console.log("estoy en render de la pizzeria")
        let pedido;
        if(this.state.show){
           pedido = <Pedido/>
        }
        return (
            <div>
               
               {pedido}
                <button onClick={ this.cancelarPedido }>Cancelar Pedido</button>
               
            </div> 
            
        )
    }
}
export default Pizzeria;