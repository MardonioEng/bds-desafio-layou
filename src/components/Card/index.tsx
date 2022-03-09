import React from "react";
import CarCard from "../../assets/images/car-card.png";
import "./styles.css";

const Card = () => {
	return (
		<div className="card-container">
			<div id="car-card">
				<img src={CarCard} alt="Carro Vermelho" />
			</div>
			<h1>Audi Supra TT</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
      <a href="/">Comprar</a>
		</div>
	);
};

export default Card;
