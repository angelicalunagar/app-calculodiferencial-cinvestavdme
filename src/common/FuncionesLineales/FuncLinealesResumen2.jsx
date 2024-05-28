import { React, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { BsCheckCircle, BsExclamationCircle } from "react-icons/bs";
import { InlineMath } from "react-katex";
import Select from "react-select";

const FuncLinealesResumen2 = ({ md }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showIcons, setShowIcons] = useState(false);

  const correctAnswers = {
    select1: "una línea recta",
    select2: "f(x)=mx+b",
    select3: "dependiente",
    select4: "independiente",
    select5: "qué tan inclinada es la recta",
    select6: "cruza al eje y",
    select7: "-\\infty < x < +\\infty",
    select8: "-\\infty < x < +\\infty",
  };

  const options = {
    select1: [
      { value: "una línea recta", label: "una línea recta" },
      { value: "una curva", label: "una curva" },
    ],
    select2: [
      {
        value: "f(x)=mx+b",
        label: (
          <span>
            <InlineMath>{"f(x)=mx+b"}</InlineMath>
          </span>
        ),
      },
      {
        value: "f(x)=b/x",
        label: (
          <span>
            <InlineMath>{"f(x)=b/x"}</InlineMath>
          </span>
        ),
      },
      {
        value: "f(x)=x^2+3x",
        label: (
          <span>
            <InlineMath>{"f(x)=x^2+3x"}</InlineMath>
          </span>
        ),
      },
    ],
    select3: [
      { value: "dependiente", label: "dependiente" },
      { value: "independiente", label: "independiente" },
    ],
    select4: [
      { value: "dependiente", label: "dependiente" },
      { value: "independiente", label: "independiente" },
    ],
    select5: [
      {
        value: "qué tan inclinada es la recta",
        label: "qué tan inclinada es la recta",
      },
      {
        value: "qué tan lejos está la recta del origen",
        label: "qué tan lejos está la recta del origen",
      },
    ],
    select6: [
      {
        value: "cruza al eje y",
        label: (
          <span>
            Cruza al eje <InlineMath>{"y"}</InlineMath>
          </span>
        ),
      },
      {
        value: "cruza al eje x",
        label: (
          <span>
            Cruza al eje <InlineMath>{"x"}</InlineMath>
          </span>
        ),
      },
    ],
    select7: [
      {
        value: "-\\infty < x < +\\infty",
        label: (
          <span>
            <InlineMath>{"-\\infty < x < \\infty"}</InlineMath>
          </span>
        ),
      },
      {
        value: "0 < x < +\\infty",
        label: (
          <span>
            <InlineMath>{" 0 < x < \\infty"}</InlineMath>
          </span>
        ),
      },
    ],
    select8: [
      {
        value: "-\\infty < x < +\\infty",
        label: (
          <span>
            <InlineMath>{"-\\infty < x < \\infty"}</InlineMath>
          </span>
        ),
      },
      {
        value: "0 < x < +\\infty",
        label: (
          <span>
            <InlineMath>{" 0 < x < \\infty"}</InlineMath>
          </span>
        ),
      },
    ],
  };

  const handleOptionChange = (e, selectKey) => {
    /* const { value } = e.target; */
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [selectKey]: e.value,
    }));
  };

  const checkAnswers = () => {
    setShowIcons(true);
  };

  const resetSelection = () => {
    setSelectedOptions({});
    setShowIcons(false);
  };

  const renderIcon = (selectKey, option) => {
    if (!showIcons) return null;
    return selectedOptions[selectKey] === option ? (
      selectedOptions[selectKey] === correctAnswers[selectKey] ? (
        <BsCheckCircle style={{ color: "green" }} />
      ) : (
        <BsExclamationCircle style={{ color: "red" }} />
      )
    ) : null;
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      width: "300px",
    }),
  };

  return (
    <>
      <Row>
        <Col style={{ display: "inline-block", alignItems: "center" }} md={md}>
          <span style={{ display: "inline-block" }}>
            Toda función lineal tiene por gráfica a
          </span>
          <span style={{ display: "inline-block" }}>
            <Select
              options={options.select1}
              value={options.select1.find(
                (option) => option.value === selectedOptions["select1"]
              )}
              onChange={(selectedOption) =>
                handleOptionChange(selectedOption, "select1")
              }
              className="select1"
              isClearable
              styles={customStyles}
            />
          </span>
          <span style={{ display: "inline-block" }}>
          {renderIcon("select1", selectedOptions["select1"])}
          </span>
          <span style={{ display: "inline-block" }}>
          <p>y su forma algebraica puede generalizarse como </p>
          </span>
          <span style={{ display: "inline-block" }}>
          <Select
            options={options.select2}
            value={options.select2.find(
              (option) => option.value === selectedOptions["select2"]
            )}
            onChange={(selectedOption) =>
              handleOptionChange(selectedOption, "select2")
            }
            className="select2"
            isClearable
            styles={customStyles}
          />
          </span>
          <span style={{ display: "inline-block" }}>
          {renderIcon("select2", selectedOptions["select2"])}, donde f(x)
          </span>
          <span style={{ display: "inline-block" }}>
          representa a la variable{" "}
          </span>
          <span style={{ display: "inline-block" }}>
          <Select
            options={options.select3}
            value={options.select3.find(
              (option) => option.value === selectedOptions["select3"]
            )}
            onChange={(selectedOption) =>
              handleOptionChange(selectedOption, "select3")
            }
            className="select3"
            isClearable
            styles={customStyles}
          />
          </span>
          <span style={{ display: "inline-block" }}>
          {renderIcon("select3", selectedOptions["select3"])} y{" "}
          </span>
          <span style={{ display: "inline-block" }}>
          <InlineMath>x</InlineMath> representa a la variable{" "}
          </span>
          <span style={{ display: "inline-block" }}>
          <Select
            options={options.select4}
            value={options.select4.find(
              (option) => option.value === selectedOptions["select4"]
            )}
            onChange={(selectedOption) =>
              handleOptionChange(selectedOption, "select4")
            }
            className="select4"
            isClearable
            styles={customStyles}
          />
          </span>
          <span style={{ display: "inline-block" }}>
          {renderIcon("select4", selectedOptions["select4"])}.
          </span>
          <br />
          <br />
          <span style={{ display: "inline-block" }}>
           Por su parte,{" "}
           </span>
           <span style={{ display: "inline-block" }}>
          <InlineMath>m</InlineMath> es el coeficiente de{" "}
          <InlineMath>x</InlineMath> e indica{" "}
          </span>
          <span style={{ display: "inline-block" }}>
          <Select
            options={options.select5}
            value={options.select5.find(
              (option) => option.value === selectedOptions["select5"]
            )}
            onChange={(selectedOption) =>
              handleOptionChange(selectedOption, "select5")
            }
            className="select5"
            isClearable
            styles={customStyles}
          />
          </span>
          <span style={{ display: "inline-block" }}>
          {renderIcon("select5", selectedOptions["select5"])} y{" "}
          </span>
          <span style={{ display: "inline-block" }}>
          <InlineMath>b</InlineMath> es el término independiente de{" "}
          <InlineMath>x</InlineMath> e indica la coordenada{" "}
          </span>{' '}
          <InlineMath>y</InlineMath> del punto donde la recta{" "}
          
          <span style={{ display: "inline-block" }}>
          <Select
            options={options.select6}
            value={options.select6.find(
              (option) => option.value === selectedOptions["select6"]
            )}
            onChange={(selectedOption) =>
              handleOptionChange(selectedOption, "select6")
            }
            className="select6"
            isClearable
            styles={customStyles}
          />
          </span>
          <span style={{ display: "inline-block" }}>
          {renderIcon("select6", selectedOptions["select6"])}. Toda función
          lineal, puesto que consiste en un producto mx y su suma con b, no
          posee restricciones para x, por lo que su dominio es{" "}
          </span>
          <span style={{ display: "inline-block" }}>
          <Select
            options={options.select7}
            value={options.select7.find(
              (option) => option.value === selectedOptions["select7"]
            )}
            onChange={(selectedOption) =>
              handleOptionChange(selectedOption, "select7")
            }
            className="select7"
            isClearable
            styles={customStyles}
          />
          </span>
          <span style={{ display: "inline-block" }}>
          {renderIcon("select7", selectedOptions["select7"])}. Finalmente, el
          rango de las funciones lineales es{" "}
          </span>
          <span style={{ display: "inline-block" }}>
          <Select
            options={options.select8}
            value={options.select8.find(
              (option) => option.value === selectedOptions["select8"]
            )}
            onChange={(selectedOption) =>
              handleOptionChange(selectedOption, "select8")
            }
            className="select8"
            isClearable
            styles={customStyles}
          />
          </span>
          <span style={{ display: "inline-block" }}>
          {renderIcon("select8", selectedOptions["select8"])}.
          </span>
        </Col>
      </Row>

      <div className="button-center">
        {showIcons ? (
          <Button onClick={resetSelection}>Modificar respuestas</Button>
        ) : (
          <Button onClick={checkAnswers}>Revisar respuestas</Button>
        )}
      </div>
    </>
  );
};

export default FuncLinealesResumen2;
