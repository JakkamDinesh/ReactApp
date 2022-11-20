import "./App.css";
import { useState } from "react";

function App(props) {
  const [inputValue, setValue] = useState("");
  function onClickBtn(props) {
    alert(inputValue);
    console.log(props);
  }
  return (
	
    <div className="container">
		<div className="card">
			<h2>Title One</h2>
			<img className="ProfileImg" src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/656.jpg" alt="" />
			<div className="line" ></div>
			<p>hjfdjhv</p>
		</div>
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
