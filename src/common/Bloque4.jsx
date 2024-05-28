import React from "react";
import "../styles/Bloque4.css";

import Sidebar from "./Sidebar";
import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import ValoresVarIndep from "./ValoresVarIndep";

function Bloque4() {
/*   const [showSidebar, setShowSidebar] = useState(false);

  const handleShow = () => {
    setShowSidebar(true);
  };
  const handleClose = () => {
    setShowSidebar(false);
  }; */

  return (
    <div className="bloque4-contenedor">
     {/*  <Row className="h-center">
        <Col md={2}>
          <Button className="button-azul" onClick={handleShow}>
            Contenido
          </Button>
        </Col>
        <Col className="col-tittles" md={8}>
          <h1>Bloque 4</h1>
          <h2>Concavidad, segunda derivada y puntos de inflexión</h2>
        </Col>
        <Col md={2}>
        </Col>
      </Row>
      <Row>
        <Col>
          <Sidebar show={showSidebar} close={handleClose} />
        </Col>
      </Row> */}
     <ValoresVarIndep /> 

    </div>
  );
}
export default Bloque4;
