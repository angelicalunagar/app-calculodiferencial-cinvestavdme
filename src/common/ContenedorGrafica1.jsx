import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import FuncionAGraficar from './FuncionAGraficar';  
import Perpendiculares from './Perpendiculares';
import FuncionContextProvider from './FuncionContexto';

const ContenedorGrafica1 = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Bloque 1: Funciones</h2>
        </Col>
      </Row>

      <FuncionContextProvider>
        <Row>
          <Col xs={12} md={6} className="border">
            <Perpendiculares />
          </Col>
          <Col xs={12} md={6}>
            <br />
            <p style={{ textAlign: 'justify' }}>Ignoremos de momento la gráfica de la izquierda.
               Una función es como una "máquina 
               matemática" que toma un número como entrada, realiza alguna
               operación con ese número, y nos da otro número como 
               resultado. Puedes pensar en ello como una especie de 
               "regla" matemática.
               <br />
               <br />
               Por ejemplo, imagina una máquina que duplica cualquier número que le des.
               Si le das el número 3, la máquina te devuelve 6. Si le das el 
               número 5, la máquina te devuelve 10. Esta máquina es una función 
               porque tiene una regla simple: duplica cualquier número que le des.
               
            </p>
            <FuncionAGraficar />
          </Col>
        </Row>
      </FuncionContextProvider>
    </Container>
  );
}

export default ContenedorGrafica1