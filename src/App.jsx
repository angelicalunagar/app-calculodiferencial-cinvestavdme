import './App.css'
import React from 'react';
import Encabezado from './common/Encabezado'; // Importa el componente
import Aprende from './pages/Aprende';
import Inicio from './pages/Inicio';
import {Routes, Route} from 'react-router-dom';
import Bloque1 from './common/Bloque1';
import Bloque2 from './common/Bloque2';
import Bloque3 from './common/Bloque3';
import Bloque4 from './common/Bloque4';
import Bloque5 from './common/Bloque5';

function App() {
  return (
    <div className='App'>
        
        <Encabezado />
        <div className='contenido-pagina'>
        <Routes >
            <Route path='/' element={<Inicio />}/>
            <Route path='/aprende' element={<Aprende />}/>
            <Route path='/aprende/bloque1' element={<Bloque1 />}/>
            <Route path='/aprende/bloque2' element={<Bloque2 />}/>
            <Route path='/aprende/bloque3' element={<Bloque3 />}/>
            <Route path='/aprende/bloque4' element={<Bloque4 />}/>
            <Route path='/aprende/bloque5' element={<Bloque5 />}/>
            
            
            {/* <Route path='*' element={<h2>Ruta inválida</h2>}/> */}
        </Routes>
        </div>
    </div>
);
}

export default App
