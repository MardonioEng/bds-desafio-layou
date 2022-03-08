import React from "react";
import CarHeader from "../../assets/images/car-header.png";
import "./styles.css";

const Home = () => {
	return (
		<>
			<div className="home-container">
				<img src={CarHeader} alt="Carro amarelo" />
				<div className="home-content-container">
					<h1>O carro perfeito para você</h1>
					<p>
						Conheça nossos carros e dê mais um passo na realização do seu sonho
					</p>
				</div>
			</div>
			<div className="link-container">
				<a href="/">VER CATÁLOGO</a>
				<p>Comece agora a navegar</p>
			</div>
		</>
	);
};

export default Home;
