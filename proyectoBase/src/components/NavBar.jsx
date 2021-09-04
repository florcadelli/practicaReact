 import "../styles/nav.css";
// import propTypes from "prop-types";

function NavBar(props) {
  return (
    <div className="nav"> 
      <ul>
        {props.enlaces.map((enlace, i) => (
          <li key={enlace + i}>{enlace}</li>
        ))}
      </ul>
    </div>
  );
}

//con las propTypes podemos definir el tipo de dato que se espera, o que es obligatoria

// NavBar.propTypes ={
//     enlaces:propTypes.array
// }

//para definir un valor por defecto.funcionalidad de react
// NavBar.defaultProps = {
//     enlaces : ["enlace1", "enlace2", "enlace3", "enlace4"]
// }
export default NavBar;