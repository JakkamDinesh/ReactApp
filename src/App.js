import "./App.css";
import { useState } from "react";
import TestApp from "./TestApp";

function App(props) {
  const [inputValue, setValue] = useState("");
  function onClickBtn(props) {
    alert(inputValue);
    console.log(props);
  }
  return (
    <div className="App">
      <TestApp></TestApp>
      <h1 className="AppHeader">{props.name} </h1>
      <h1 className="AppHeader">{inputValue} </h1>
      <input
        type="text"
        id="{props.id} "
        name="{props.id} "
        onChange={(e) => setValue(e.target.value)}
        value={inputValue}
      />
      <button id="txtBtnSearch" onClick={() => onClickBtn(props)}>
        Search
      </button>
    </div>
  );
}
export default App;
