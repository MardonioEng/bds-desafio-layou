import React from "react";
import "./assets/styles/custom.scss";
import "./App.css";
import Navbar from "components/Navbar";
import Catalogo from "pages/Catalogo";

function App() {
	return (
		<>
			<Navbar />
			<Catalogo />
		</>
	);
}

export default App;
