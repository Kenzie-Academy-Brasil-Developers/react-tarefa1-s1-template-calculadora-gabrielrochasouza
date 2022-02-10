
import "./App.css";

import Calculadora from "./Components/Calculadora";
import {useState} from 'react'


function App() {
  const [input,setInput] = useState('')
  const [output,setOutput] = useState('')
  return (
    <div className="App">

     <Calculadora input={input} setInput={setInput} output={output} setOutput={setOutput}  />

    </div>
  );
}

export default App;
