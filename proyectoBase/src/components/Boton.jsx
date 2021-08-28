import React, { Component } from 'react'

class Boton extends Component {

    constructor(props){
        super(props);
        this.state = {
          peliculas :{
            //   peliculas1
            }  }
      } 
    
    cambiarPeliculas(){
    this.setState({peliculas: {
        // peliculas2
    }})
    }


    render() {
        return (
            // 
            <button onClick={ ()=> this.cambiarPeliculas}>Ver mas peliculas</button>
        )
    }
}
export default Boton;
// function Boton(props) {
//     return (
//         <button onClick={props.funcion}>Ver mas peliculas</button>    
//     );
//   }
//   export default Boton;
  