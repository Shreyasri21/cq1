// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState(1);
  const [colr, setColr] = useState(false);
  function handleClick() {
    setColr(!colr);
  }
  return (
    <div className="App">
      <div className="box">
        <div
          className="circle"
          style={
            !colr
              ? { backgroundColor: "yellow" }
              : { backgroundColor: "rgb(6, 224, 108)" }
          }
        >
          <h1>{val <= 9 ? `0${val} ` : `${val}`}</h1>
          <p
            onClick={() => {
              setVal(val + 1);
            }}
          >
            Click to increase counter
          </p>
        </div>
      </div>
      <button
        style={
          !colr
            ? { backgroundColor: "rgb(6, 224, 108)" }
            : { backgroundColor: "yellow" }
        }
        onClick={handleClick}
      >
        Change Color
      </button>
    </div>
  );
}

export default App;
