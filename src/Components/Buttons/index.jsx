import "./style.css";

export default function Button({
  children,
  setInput,
  input,
  setOutput,
  output,
}) {
  function calcular(text) {
    if (isNaN(text[0]) || isNaN(text.slice(-1))) return "error";
    return eval(text);
  }

  return (
    <div
      className="btn"
      onClick={() => {
        if(children === "DEL") {
          setInput(input.slice(0, -1));
        }else if (children === "AC") {
          setInput("0");
          setOutput("");
        }else if (children === "=") {
          const result = calcular(input);
          setOutput(input + " = " + result);
          setInput('0');
        }else {
          if(input === "0") {
            setInput(children);
          }else {
            if(children==='raiz'){
                setInput(input + '**0.5')
            }else{
                setInput(input + children);
            }
          }
        }
      }}
    >
      {children}
    </div>
  );
}
