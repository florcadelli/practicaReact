import React, { Component } from 'react'

class Pedido extends Component {
    /* ------------------------------- constructor ------------------------------ */
    constructor(){
        super();
        this.state = {
            pedido: " ",
            botones: false
        }
        
    }
   /* -------------------------------- funciones ------------------------------- */
    
    pedirEmpanadas  = ()=> {
        this.setState ({pedido : "Tu pedido: Empanadas x 12"})
    }
    pedirPizzas  = ()=> {
        this.setState ({pedido : "Tu pedido: Muzza gigante "})
    }

   
  /* ------------------------------ ciclo de vida ----------------------------- */

    componentDidMount(){
        console.log("Estoy en didMount de pizzeria")
      
        setTimeout(() => {
            this.setState({pedido: "Realiza un pedido para acompañar tu pelicula "})
          }, 1000)
          setTimeout(() => {
            this.setState({botones: true})
          }, 2000)
    }

    componentDidUpdate(){
        console.log("Me actualice pizzeria")
   }
//    se ejecuta un sesundo antes de ser desmontado
   componentWillUnmount(){
       console.log("el componente sera desmontado")
    //    alert("cancelaste tu pedido")
   }
/* --------------------------------- render --------------------------------- */
    render() {
        console.log("estoy en render de la pizzeria")
        let botonitos;
        if(this.state.botones){
        botonitos =    <>
                          <button onClick={ this.pedirEmpanadas }>Pedir Empanadas</button>
                          <button onClick={ this.pedirPizzas }>Pedir Pizzas</button>
                       </>
    
        }
        
        return (
            <div>
                
                <h4>{this.state.pedido}</h4> 
                {botonitos}
                <p>-----------</p>         
            </div> 
            
        )
    }
}
export default Pedido;