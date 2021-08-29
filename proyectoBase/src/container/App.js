import "../styles/App.css";
import TiraPeliculas from "../components/TiraPeliculas";
import NavBar from "../components/NavBar";
import Boton from "../components/Boton";
import React, { Component } from 'react'

//fuera del componente de clase
let textoHeader = "Soy el header";
let enlaces = ["home", "Productos", "Servicios", "Sucursales", "Contacto"]
let textoFooter = "Soy el footer";
let peliculas1 = [
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
]
let peliculas2 = [
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



class App extends Component {
  constructor (){
    super();
    this.state = { 
      peliculas : peliculas1}
  }

cambiarPeliculas() {
  if(this.state.peliculas == peliculas1){
    this.setState ({peliculas : peliculas2})
  }else{
    this.setState ({peliculas : peliculas1})
  }
  
  
}

render() {
 
   return (
         <div className= "App">
             <header className= "App-header">
               <NavBar enlaces = {enlaces} />
             </header>
             <main>
             <TiraPeliculas  info = {this.state.peliculas}/>
             <button onClick={ ()=> this.cambiarPeliculas()}> Cambiar Peliculas</button>
             </main>
             <footer><p>{textoFooter}</p></footer> 
         </div>
      )
    }
}

export default App
