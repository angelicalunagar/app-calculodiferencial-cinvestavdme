import '../styles/Aprende.css';
import Bloque from '../common/Bloque';
import React, { useEffect } from 'react';

function Aprende() {
  useEffect(() => {
    const inicioDePagina = document.querySelector('body');
    inicioDePagina.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="AppAprende">
      <div className='contenedor-principal'>
        <Bloque
          titulo="BLOQUE 1" 
          subtitulo="Funciones"
          imagen="img_bloque1"
          descripcionImagen="Funciones"
          bloque="/aprende/bloque1"
          />
          
        <Bloque
          titulo="BLOQUE 2" 
          subtitulo="Construcción de la derivada de una función"
          imagen="img_bloque2"
          descripcionImagen="Derivada"
          bloque="/aprende/bloque2" />
          
          
        <Bloque
          titulo="BLOQUE 3" 
          subtitulo="Crecimiento, decrecimiento, máximos y mínimos de una función"
          imagen="img_bloque3"
          descripcionImagen="Máximos y mínimos"
          bloque="/aprende/bloque3" />
          
        <Bloque
          titulo="BLOQUE 4" 
          subtitulo="Concavidad, segunda derivada y puntos de inflexión"
          imagen="img_bloque4"
          descripcionImagen="Concavidad y puntos de inflexión de una función"
          bloque="/aprende/bloque4"/>
          
        <Bloque
          titulo="BLOQUE 5" 
          subtitulo="Práctica interactiva para caracterizar una función usando la primera y segunda derivada."
          imagen="img_bloque5"
          descripcionImagen="Estudiante practicando en la computadora"
          bloque="/aprende/bloque5"/>
      </div>
    </div>
  );
}

export default Aprende;

