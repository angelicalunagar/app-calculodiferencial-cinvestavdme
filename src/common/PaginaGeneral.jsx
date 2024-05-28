import React from "react";
import "../styles/PaginaGeneral.css";
import est_1 from '../assets/est_1.png';
import est_2 from '../assets/est_2.png';
import est_3 from '../assets/est_3.png';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function PaginaGeneral(props){
  return(
  <div className="grid-container" id={props.id}>
    <div className="grid-col1">
      {/* Columna 1 dividida en dos filas */}
      <h2 className="tit">{props.titulo}</h2>
      <div className="box-text" style={{ color: props.color, backgroundColor: props.colorFondo }}>{props.texto}</div>
    </div>
    <div className="grid-col2">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="img"
            src={est_1}
            alt="First slide" 
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="img"
            src={est_2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="img"
            src={est_3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
  );
}

export default PaginaGeneral;