import "../styles/App.css";
import TiraPeliculas from "../components/TiraPeliculas";
import NavBar from "../components/NavBar";
import Boton from "../components/Boton";


import React, { Component } from 'react'

//fuera del componente de clase
let textoHeader = "Soy el header";
let enlaces = ["home", "Productos", "Servicios", "Sucursales", "Contacto"]
let textoFooter = "Soy el footer";
/* ------------------------------- peliculas1 ------------------------------- */
let peliculas = {
  peliculas1 : [
    {
      titulo: "Pelicula1",
      rating: "8.0",
      generos: ["drama", "accion"]
    },
    {
      titulo: "Pelicula2",
      rating: "7.0",
      generos: ["comedia", "accion"]
    },
    {
      titulo: "Pelicula3",
      rating: "6.0",
      generos: ["terror"]
    },
    {
      titulo: "Pelicula4",
      rating: "5.0",
      generos: ["terror"]
    }
  ],
   peliculas2 : [
    {
      titulo: "Pelicula5",
      rating: "8.0",
      generos: ["drama", "accion"]
    },
    {
      titulo: "Pelicula6",
      rating: "7.0",
      generos: ["comedia", "accion"]
    },
    {
      titulo: "Pelicula7",
      rating: "6.0",
      generos: ["terror"]
    },
    {
      titulo: "Pelicula8",
      rating: "5.0",
      generos: ["terror"]
    }
  ]

}





class App extends Component {
/* ------------------------------- constructor ------------------------------ */
constructor(){
  super();
  this.state = {
    peliculas :{peliculas}  }
} 
/* -------------------------------- funciones ------------------------------- */


/* --------------------------------- render --------------------------------- */
render() {
 
   return (
         <div className= "App">
             <header className= "App-header">
               <NavBar enlaces = {enlaces} />
             </header>
             <main>
                 <TiraPeliculas peliculas={this.state.peliculas} />
                 {/* <Boton peliculas={this.state.peliculas} /> */}
                 {/* <Boton funcion={this.cambiarPeliculas} />    */}
                 {/* <button onClick={ () => this.cambiarPeliculas()}>Ver mas peliculas</button>     */}
             </main>
             <footer><p>{textoFooter}</p></footer> 
         </div>
      )
    }
}

export default App
