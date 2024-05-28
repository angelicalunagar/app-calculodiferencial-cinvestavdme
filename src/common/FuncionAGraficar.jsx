/* //FuncionAGraficar.js
import React, { useContext } from "react";
import { FuncionContext } from "./FuncionContexto";
import { InlineMath } from "react-katex";
import parse from "html-react-parser";

const FuncionAGraficar = () => {
  const { selectedFunc, setSelectedFunc } = useContext(FuncionContext);

  const handleFuncChange = (e) => {
    setSelectedFunc(e.target.value);
  };

  return (
    <div className="funcion-grafica">
       <h2>Selecciona una función:</h2>
        <select value={selectedFunc} onChange={handleFuncChange}>
          <option value="a*x"><InlineMath>f(x) = x</InlineMath></option>
          <option value="a*x**2"><InlineMath>f(x) = x^2</InlineMath></option>
          <option value="a*x**3"><InlineMath>f(x) = x^3</InlineMath></option>
          <option value="a*x**4"><InlineMath>f(x) = x^4</InlineMath></option>
        </select> 
    </div>
  );
};

export default FuncionAGraficar;
 */

import React, { useContext, useState} from "react";
import { FuncionContext } from "./FuncionContexto";
import Select from "react-select";
import { InlineMath } from "react-katex";

const FuncionAGraficar = () => {
  const { selectedFunc, setSelectedFunc } = useContext(FuncionContext);
  const [selectedLabel, setSelectedLabel]   = useState();

  const handleFuncChange = (e) => {
    setSelectedFunc(e.value);
    setSelectedLabel(e.label)
  };

  

  const options = [
    { value: "a*x", label: <InlineMath>f(x) = x</InlineMath> },
    { value: "a*x**2", label: <InlineMath>f(x) = x^2</InlineMath> },
    { value: "a*x**3", label: <InlineMath>f(x) = x^3</InlineMath> },
    { value: "a*x**4", label: <InlineMath>f(x) = x^4</InlineMath> },
  ];

  const customStyles = {
    control: (base) => ({
      ...base,
      width: '200px', // Ajusta el ancho a tu preferencia
    }),
  };


  return (
    <div className="funcion-grafica">
      <h2>Selecciona una función:</h2>
      <Select
        value={{ value: selectedFunc, label: selectedLabel }}
        onChange={handleFuncChange}
        options={options}
        styles={customStyles} // Aplica los estilos personalizados
      />
    </div>
  );
};

export default FuncionAGraficar;

