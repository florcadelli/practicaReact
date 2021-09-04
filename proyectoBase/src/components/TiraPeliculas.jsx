import Pelicula from "./Pelicula";
import "../styles/peliculas.css";

function TiraPeliculas(props) {
  return (
    <div className="tira-de-peliculas">
      
        {props.info.map((pelicula, i) => (
          <Pelicula
            key={pelicula.titulo + 1}
            titulo={pelicula.titulo}
            rating={pelicula.rating}
            generos={pelicula.generos}
          />
        ))}

         <p>tira de cambiarPeliculas</p>

       </div>
  
  );
}
export default TiraPeliculas;




