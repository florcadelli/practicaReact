import React, { Component } from "react";


class Rejuvenecedor extends Component {
  constructor(){
      super();
      this.state = {
        
          nombre: "",
          edad: null,
          error: false
      }
     
  }
  
guardarCambioNombre  = (event)=> {
      this.setState ({
           nombre: event.target.value,
           error: false
        })
        console.log('Has cambiado el nombre');
  }

guardarCambioEdad  = (event)=> {
    this.setState ({
         edad: event.target.value,
         error: false
      })
      console.log('Has cambiado la edad');
}

  manejarSubmit = (event) => {
    event.preventDefault();
    if(this.state.nombre === ""){
        this.setState({ error: true});
        alert("el campo nombre no puede estar vacio")
    }else if(this.state.edad <= 0){
        this.setState({ error: true});
        alert("la edad no puede ser menor a 0")    
    }else {
    alert('Hola ' + this.state.nombre + ' tu nueva edad es: '+(this.state.edad-10));
    this.setState({ nombre: ''});
    }
    }
    
  render() {
   
    return (
      <div>
        <p>Soy el Rejuvenecedor</p>
        <form onSubmit={this.manejarSubmit}>
         
          <label> Nombre de Usuario </label>
          <input
            type="text"
            value={this.state.nombre}
            onChange={this.guardarCambioNombre}
          />
          {this.state.error && <span>El campo nombre no puede estar vacía</span>}

          <label> Edad de Usuario </label>
          <input
            type="number"
            value={this.state.edad}
            onChange={this.guardarCambioEdad}
          />
          {this.state.error && <span>la edad no puede ser menor a 0</span>}
          <button type="submit">Enviar</button>
        </form>
  
      </div>
    );
  }
}
export default Rejuvenecedor;