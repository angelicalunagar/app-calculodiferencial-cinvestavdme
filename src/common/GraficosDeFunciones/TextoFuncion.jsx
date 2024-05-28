import React from "react";
import { FuncLinealContext } from "../../contexts/FuncLinealContext";
import { useContext } from "react";

const TextoFuncion = () => {
  const { intercept, slope } = useContext(FuncLinealContext);

  return (
    <div style={{backgroundColor: '#011627', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{ color: '#FF821C', fontWeight: 'bold', fontSize: '24px' }}>
      f(x) = {slope}x {intercept >= 0 ? '+' : ''} { intercept }
      </p>
    </div>
  );
};

export default TextoFuncion;
