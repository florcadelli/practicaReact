import React, { Component } from "react";


class Formulario extends Component {
  constructor(){
      super();
      this.state = {
        
          nombre: "",
          error: false
      }
     
  }
  
  //toma el valor que ingresaste en el input
  manejarCambio  = (event)=> {
      this.setState ({
           name: event.target.value,
           error: false
        })
        console.log('Has cambiado el nombre');
  }

  //valida que el campo no este vacio y guarda el valor en el
  manejarSubmit = (event) => {
    event.preventDefault();
    if(this.state.name === undefined){
        this.setState({ error: true});
        alert("el campo nombre no puede estar vacio")
    } else {
    alert('Hola ' + this.state.name);
    this.setState({ name: ''});
    }
    }


  render() {
   
    return (
      <div>
        <p>Soy el formulario</p>
        <form onSubmit={this.manejarSubmit}>
         
          <label> Nombre de Usuario </label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.manejarCambio}
          />
          {this.state.error && <span>El campo nombre no puede estar vacía</span>}
          <button type="submit">Enviar</button>
        </form>
        {/* <button onClick={this.volverCero}>ENVIAR</button> */}
      </div>
    );
  }
}
export default Formulario;
