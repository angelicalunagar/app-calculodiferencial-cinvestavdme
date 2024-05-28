import React from "react";
import '../styles/Bloque3.css'
import TablaDeFuncion from "./TablaDeFuncion/TablaDeFuncion";
import { Link } from "react-router-dom";


function Bloque3(){
  return(
    <div className="bloque3-contenedor">
      <div className="h-center">
        <h1>Bloque 3</h1>
        <h2>Crecimiento, decrecimiento, máximos y mínimos de una función</h2>
      </div>
    
      <TablaDeFuncion />
      <Link to="/otra-pagina">
        <button className="boton-cuestionario">Cuestionario</button>
      </Link>
    </div>
  );
}
export default Bloque3;