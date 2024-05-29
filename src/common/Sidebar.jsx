import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

import VarDepYVarIndep from "./VarDepYVarIndep/VarDepYVarIndep";
import ReglaDeCorrespondencia from "./ReglaDeCorrespondencia/ReglaDeCorrespondencia";
/* import EvaluarLaReglaDeCorrespon from "./EvaluarLaReglaDeCorrespon/EvaluarLaReglaDeCorrespon";
import ValoresVarIndep from "./ValoresVarIndep";
import ValoresVarDependiente from "./ValoresVarDependiente/ValoresVarDependiente";
import QueEsFuncion from "./QueEsFuncion";
import NomenclaturaFunciones from "./NomenclaturaFunciones";
import FuncionesDosVariables from "./FuncionesDosVariables/FuncionesDosVariables";
import TablaDeFuncion from "./TablaDeFuncion/TablaDeFuncion";
import GraficosDeFunciones from "./GraficosDeFunciones/GraficosDeFunciones";
import FuncLineales from "./FuncionesLineales/FuncLineales";
import FuncionesCuadraticas from "./FuncionesCuadraticas/FuncionesCuadraticas";
import FunPolinomiales from "./FuncionesPolinomiales.jsx/FunPolinomiales"; */
import "../styles/Sidebar.css";

function Sidebar({ show, close }) {
  /* const [show, setShow] = useState(false); */
  const [selectedComponent, setSelectedComponent] = useState("VarDepYVarIndep");

  /*   const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true); */

  // Función para renderizar el componente seleccionado
  const renderComponent = () => {
    switch (selectedComponent) {
      case "VarDepYVarIndep":
        return <VarDepYVarIndep />;
      case "ReglaDeCorrespondencia":
        return <ReglaDeCorrespondencia />;
      /* case "EvaluarLaReglaDeCorrespon":
        return <EvaluarLaReglaDeCorrespon />;
      case "ValoresVarIndep":
        return <ValoresVarIndep />;
      case "ValoresVarDependiente":
        return <ValoresVarDependiente />;
      case "QueEsFuncion":
        return <QueEsFuncion />;
      case "NomenclaturaFunciones":
        return <NomenclaturaFunciones />;
      case "FuncionesDosVariables":
        return <FuncionesDosVariables />;
      case "TablaDeFuncion":
        return <TablaDeFuncion />;
      case "GraficosDeFunciones":
        return <GraficosDeFunciones />;
      case "FuncLineales":
        return <FuncLineales />;
      case "FuncionesCuadraticas":
        return <FuncionesCuadraticas />;
      case "FunPolinomiales":
        return <FunPolinomiales />; */

      default:
        return null;
    }
  };

  return (
    <>
      {/*  <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}

      <Offcanvas show={show} onHide={close}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contenido</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="sidebar">
          <ul className="list-unstyled">
            <li>
              <button
                onClick={() => setSelectedComponent("VarDepYVarIndep")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "VarDepYVarIndep" ? "selected" : ""
                }`}
              >
                Variable dependiente y variable independiente
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("ReglaDeCorrespondencia")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "ReglaDeCorrespondencia"
                    ? "selected"
                    : ""
                }`}
              >
                Regla de correspondencia
              </button>
            </li>
            {/* <li>
              <button
                onClick={() =>
                  setSelectedComponent("EvaluarLaReglaDeCorrespon")
                }
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "EvaluarLaReglaDeCorrespon"
                    ? "selected"
                    : ""
                }`}
              >
                Evaluar la regla de correspondencia
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("ValoresVarIndep")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "ValoresVarIndep" ? "selected" : ""
                }`}
              >
                Valores que adquiere la variable independiente
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("ValoresVarDependiente")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "ValoresVarDependiente"
                    ? "selected"
                    : ""
                }`}
              >
                Valores que adquiere la variable dependiente
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("QueEsFuncion")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "QueEsFuncion" ? "selected" : ""
                }`}
              >
                ¿Qué es una función?
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("NomenclaturaFunciones")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "NomenclaturaFunciones"
                    ? "selected"
                    : ""
                }`}
              >
                Nomenclatura de las funciones
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("FuncionesDosVariables")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "FuncionesDosVariables"
                    ? "selected"
                    : ""
                }`}
              >
                Funciones de dos variables
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("TablaDeFuncion")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "TablaDeFuncion" ? "selected" : ""
                }`}
              >
                Tabla de una función
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("GraficosDeFunciones")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "GraficosDeFunciones" ? "selected" : ""
                }`}
              >
                Gráficos de Funciones
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("FuncLineales")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "FuncLineales" ? "selected" : ""
                }`}
              >
                Funciones Lineales
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("FuncionesCuadraticas")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "FuncionesCuadraticas" ? "selected" : ""
                }`}
              >
                Funciones Cuadráticas
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedComponent("FunPolinomiales")}
                className={`text-nowrap sidebar-button ${
                  selectedComponent === "FunPolinomiales" ? "selected" : ""
                }`}
              >
                Funciones Polinomiales
              </button>
            </li> */}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      {selectedComponent && (
        <div style={{ marginTop: "0px" }}>{renderComponent()}</div>
      )}
    </>
  );
}

export default Sidebar;
