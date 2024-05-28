import React, { useEffect, useState } from 'react';
import { JSXGraph } from 'jsxgraph';

const VariacionFuncion = () => {
  const [functionExpression, setFunctionExpression] = useState('');
  

  useEffect(() => {
    const board = JSXGraph.initBoard('variation-container', {
      boundingbox: [-5, 5, 5, -5],
      axis: true,
      pan: {
        needShiftToPan: true,
        enabled: true,
      },
      showcopyright: false,
    });

    // Definir la función f(x) = 2x
    const f = board.create('functiongraph',  [(x) => 2 * x]);

    
    // Crear los puntos A y B
    const gliderA = board.create('glider', [0.6, 1.2, f], { name: 'A'});
    const gliderB = board.create('glider', [1.5, 3, f], { name: 'B' });

    const areaX = board.create('polygon', [
      function(){return [gliderA.X(), 0];},
      function(){return [gliderA.X(), gliderA.Y()]},
      function(){return [gliderB.X(), gliderB.Y()]},
      function(){return [gliderB.X(), 0]},
    ], { fillColor: 'rgba(0, 0, 255, 0.5)', fixed: true });

    const areaY = board.create('polygon', [
      function(){return[0, gliderA.Y()]},
      function(){return[gliderA.X(), gliderA.Y()]},
      function(){return[gliderB.X(), gliderB.Y()]},
      function(){return[0, gliderB.Y()]}  
    ], { fillColor: 'rgba(255, 165, 0, 0.5)', fixed: true });

    // Ocultar los vértices de los polígonos
    areaX.vertices.forEach(v => v.setAttribute({ visible: false }));
    areaY.vertices.forEach(v => v.setAttribute({ visible: false }));

        // Función para actualizar las áreas cuando los puntos A y B se mueven
        const updateAreas = () => {
          areaX.vertices[0].moveTo([gliderA.X(), 0]);
          areaX.vertices[1].moveTo([gliderA.X(), gliderA.Y()]);
          areaX.vertices[2].moveTo([gliderB.X(), gliderB.Y()]);
          areaX.vertices[3].moveTo([gliderB.X(), 0]);
    
          areaY.vertices[0].moveTo([0, gliderA.Y()]);
          areaY.vertices[1].moveTo([gliderA.X(), gliderA.Y()]);
          areaY.vertices[2].moveTo([gliderB.X(), gliderB.Y()]);
          areaY.vertices[3].moveTo([0, gliderB.Y()]);
    
          board.update();
        };
    
        // Actualizar las áreas cuando los puntos A y B se mueven
        gliderA.on('drag', updateAreas);
        gliderB.on('drag', updateAreas);

  }, []);

  return (
    <div className='variation-container'>
      <div>
        <p>Función seleccionada: {functionExpression}</p>
      </div>
      <div id="variation-container" className='jxgbox color-marco' style={{ width: '100%', height: '400px' }} />
    </div>
  );
};

export default VariacionFuncion;
