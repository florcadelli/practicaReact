import "../styles/peliculas.css";

function Pelicula(props) {
  return (
    <div className="pelicula">
      <h2> {props.titulo} </h2>
      <p>Rating : {props.rating} </p>
      <ul>
        {props.generos.map((genero, i) => (
          <li key={genero + i}>{genero}</li>
        ))}
      </ul>
    </div>
  );
}
export default Pelicula;
