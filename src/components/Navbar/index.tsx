import React from "react";
import 'bootstrap/js/src/collapse.js';
import "./styles.css";
import { ReactComponent as MenuHamburguer } from "../../assets/images/menu-hamburguer.svg";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-primary main-nav">
			<div className="container-fluid">
				<a href="/">Carros Top</a>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#carrostop-navbar"
					aria-controls="carrostop-navbar"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
          <MenuHamburguer />
				</button>

				<div className="collapse navbar-collapse" id="carrostop-navbar">
					<ul className="navbar-nav ms-auto main-menu">
						<li>
							<a href="/" className="active">
								Home
							</a>
						</li>
						<li>
							<a href="/">Catálogo</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
