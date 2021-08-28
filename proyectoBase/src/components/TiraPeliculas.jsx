import Pelicula from "./Pelicula";
import "../styles/peliculas.css";
import React, { Component } from "react";

// function TiraPeliculas(props) {
class TiraPeliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: props.peliculas.peliculas.peliculas1
    }; 
   
    this.cambiarPeliculas.bind(this);
  }

   cambiarPeliculas(){
    this.setState({peliculas: this.props.peliculas.peliculas.peliculas2})
  }

  render() {
    return (
      <div className="tira-de-peliculas">
      
        {this.state.peliculas.map((pelicula, i) => (
          <Pelicula
            key={pelicula + 1}
            titulo={pelicula.titulo}
            rating={pelicula.rating}
            generos={pelicula.generos}
          />
        ))}

        <p>tira de cambiarPeliculas</p>

        <button onClick={this.cambiarPeliculas}>Ver mas peliculas</button>
      </div>
    );
  }
}
export default TiraPeliculas;
