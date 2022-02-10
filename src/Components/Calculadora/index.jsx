import "./style.css";
import { useState } from "react";
import Button from "../Buttons";

export default function Calculadora({ input, setInput, output, setOutput }) {
  const teclas = [
    "1","2","3","DEL","AC",
    "4","5","6","*","/",
    "7","8","9","+","-",
    "0",".","raiz","**","=",
  ];
  return (
    <div className="calculadora">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
      <div className="visor">
        <span className="inputSpan">{input}</span>
        <span className="outputSpan">{output}</span>
      </div>

      {teclas.map((tecla, index) => (
        <Button
          key={index}
          input={input}
          setInput={setInput}
          output={output}
          setOutput={setOutput}
        >
          {tecla}
        </Button>
      ))}
    </div>
  );
}
