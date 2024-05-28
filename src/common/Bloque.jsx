import React from "react";
import "../styles/Bloque.css";
import {Link} from 'react-router-dom';

import img_bloque1 from '../assets/img_bloque1.png';
import img_bloque2 from '../assets/img_bloque2.png';
import img_bloque3 from '../assets/img_bloque3.png';
import img_bloque4 from '../assets/img_bloque4.png';
import img_bloque5 from '../assets/img_bloque5.png';

function Bloque(props){
  const imgMap = {
    img_bloque1,
    img_bloque2,
    img_bloque3,
    img_bloque4,
    img_bloque5,
  };
  
  return(
    <div className="contenedor-bloque">
      
      <div className="texto-bloque">
        <p className="titulo-bloque"><b>{props.titulo}</b></p>
        <p className="subtitulo-bloque">{props.subtitulo}</p>
      </div> 
      <div className="img-bloque">
        <img src={imgMap[props.imagen]} alt={props.descripcionImagen} />
      </div>
      <Link to={props.bloque}>
        <button className="boton">Estudiar</button>
      </Link>   
    </div>
    
  );
}

export default Bloque;