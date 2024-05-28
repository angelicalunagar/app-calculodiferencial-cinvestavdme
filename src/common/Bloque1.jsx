//Bloque 1
import React from "react";
import "../styles/Bloque4.css";
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useState } from "react";

function Bloque1() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShow = () => {
    setShowSidebar(true);
  };
  const handleClose = () => {
    setShowSidebar(false);
  };

  return (
    <div className="bloque4-contenedor">
      <Row className="h-center">
        <Col md={2}>
          <Button className="button-azul" onClick={handleShow}>
            Contenido
          </Button>
        </Col>
        <Col className="col-tittles" md={8}>
          <h1>Bloque 1</h1>
          <h2>Funciones</h2>
        </Col>
        <Col md={2}>
        </Col>
      </Row>
      <Row>
        <Col>
          <Sidebar show={showSidebar} close={handleClose} />
        </Col>
      </Row>
    </div>
  );
}
export default Bloque1;