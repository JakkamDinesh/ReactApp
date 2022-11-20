import "./App.css";
// import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import AppCard from "./AppCard.js";
// import AppCardContent from "./AppContent";
function App() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
  
	// Note: the empty deps array [] means
	// this useEffect will run once
	// similar to componentDidMount()
	useEffect(() => {
	  fetch("https://api.npoint.io/0d48234659b84aa388d7")
		.then(res => res.json())
		.then(
		  (result) => {
			setIsLoaded(true);
			setItems(result);
		  },
		  // Note: it's important to handle errors here
		  // instead of a catch() block so that we don't swallow
		  // exceptions from actual bugs in components.
		  (error) => {
			setIsLoaded(true);
			setError(error);
		  }
		)
	}, [])
  
	if (error) {
	  return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
	  return <div>Loading Please Wait...</div>;
	} else {
	  return (
		<>
			<div className="container">
				{items.map(item => (
					<AppCard Data={item}  key={item.id}  ></AppCard>
				))}
			</div>
		</>
		
	  );
	}
}
export default App;
