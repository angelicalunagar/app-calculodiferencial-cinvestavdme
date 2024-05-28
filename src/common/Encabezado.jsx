//Encabezado.jsx
import React from 'react';
import "../styles/Encabezado.css"
import {Link, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap'
import logo1 from '../assets/logo_cinves.png';
import logo2 from '../assets/logo_matedu.png';

const Encabezado = ()=> {
  const navigate = useNavigate(); // Obtiene el objeto de navegación

    // Función para navegar a la ruta raíz "/"
    const navigateToInicio = () => {
        navigate("/");
    };
    const navigateToQuienesSomos = () => {
        navigate("/#quienes-somos");
    };
    const navigateToContactanos = () => {
        navigate("/#contactanos");
    };
  return(
    <div className="fija"> 
      <Navbar collapseOnSelect expand="lg" className="encabezado">
      <Container>
        <Navbar.Brand href="#">Cálculo Bachillerato</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <div className="encabezado-logos">
              <img className="logo uno" src={logo1} alt="Logo del Cinvestav" />
              <img className="logo dos" src={logo2} alt="Logo del Departamento de Matemática Educativa" />
            </div>
          </Nav>
          <Nav className='encabezado-links'>
            <Nav.Link href="#inicio" onClick={navigateToInicio}>Inicio</Nav.Link>
            <Nav.Link href="#quienes-somos" onClick={navigateToQuienesSomos}>Quienes somos</Nav.Link>
            <Nav.Link href="#contactanos" onClick={navigateToContactanos}>Contáctanos</Nav.Link>
            <Nav.Link href="#aprende" as={Link} to="/aprende"/* "/aprende" */>Aprende</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

)
}
export default Encabezado;