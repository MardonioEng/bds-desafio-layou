import 'bootstrap/js/src/collapse.js';
import "./styles.css";
import { ReactComponent as MenuHamburguer } from "../../assets/images/menu-hamburguer.svg";
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-primary main-nav navbar-fixed-top">
			<div className="container-fluid">
				<Link to="/">Carros Top</Link>

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
							<Link to="/" className="active">
								Home
							</Link>
						</li>
						<li>
							<Link to="/catalogo">Catálogo</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
