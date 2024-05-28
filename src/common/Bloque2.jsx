import React from "react";
import "../styles/Bloque2.css";
import VarDepYVarIndep from "./VarDepYVarIndep/VarDepYVarIndep";
import ReglaDeCorrespondencia from "./ReglaDeCorrespondencia/ReglaDeCorrespondencia";
import EvaluarLaReglaDeCorrespon from "./EvaluarLaReglaDeCorrespon/EvaluarLaReglaDeCorrespon";
import ValoresVarIndep from "./ValoresVarIndep";
import ValoresVarDependiente from "./ValoresVarDependiente/ValoresVarDependiente";
import QueEsFuncion from "./QueEsFuncion";
import NomenclaturaFunciones from "./NomenclaturaFunciones";
import FuncionesDosVariables from "./FuncionesDosVariables/FuncionesDosVariables";
import TablaDeFuncion from "./TablaDeFuncion/TablaDeFuncion";
/* import GraficosDeFunciones from "./GraficosDeFunciones"; */
import GraficosDeFunciones from "./GraficosDeFunciones/GraficosDeFunciones";
import FuncLineales from "./FuncionesLineales/FuncLineales";
import FuncionesCuadraticas from "./FuncionesCuadraticas/FuncionesCuadraticas";
import FunPolinomiales from "./FuncionesPolinomiales.jsx/FunPolinomiales";

function Bloque2() {
  return (
    <div className="bloque2-contenedor">
      <div className="h-center">
        <h1>Bloque 2</h1>
        <h2>Funciones</h2>
      </div>
      <VarDepYVarIndep />
      <ReglaDeCorrespondencia />
      <EvaluarLaReglaDeCorrespon />
      <ValoresVarIndep />
      <ValoresVarDependiente />
      <QueEsFuncion />
      <NomenclaturaFunciones />
      <FuncionesDosVariables />
      <TablaDeFuncion />
      {/* <GraficosDeFunciones /> */}
      <GraficosDeFunciones />
      <FuncLineales />
      <FuncionesCuadraticas />
     <FunPolinomiales /> 
    </div>
  );
}
export default Bloque2;
