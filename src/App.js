import './App.css';
import { useRef, useState} from 'react';

function App() {
  const inputRef = useRef(null);
  // result ref is for the display in the result section
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e){
    e.preventDefault();
    const inputVal = Number(inputRef.current.value);
    const newResult = result + inputVal;
    setResult(newResult);
  }

  function minus(e){
  e.preventDefault();
  const inputVal = Number(inputRef.current.value);
  const newResult = result - inputVal;
  setResult(newResult);
  }

  function multiply(e){
  e.preventDefault();
  const inputVal = Number(inputRef.current.value);
  const newResult = result * inputVal;
  setResult(newResult);
  }

  function divide(e){
  e.preventDefault();
  const inputVal = Number(inputRef.current.value);
  if(inputVal === 0){
    alert("Cannon Divide By 0!!")
    return
  }
  const newResult = result / inputVal;
  setResult(newResult);
  }


  function resetInput(e){
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e){
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>
                  Simple Calculator App
        </h1>
        <p ref={resultRef}>
          {result}
        </p>
      </div>
      <form>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>Add +</button>
        <button onClick={minus}>Subtract -</button>
        <button onClick={multiply}>Multiply *</button>
        <button onClick={divide}>Divide /</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  );
}

export default App;
