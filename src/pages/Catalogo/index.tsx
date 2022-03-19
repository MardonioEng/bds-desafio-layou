import Buscar from "components/Buscar";
import Card from "components/Card";
import "./styles.css";

const Catalogo = () => {
	return (
		<>
			<Buscar />
      <div className="items-container">
        <div className="items">
          <Card />
        </div>
        <div className="items">
          <Card />
        </div>
        <div className="items">
          <Card />
        </div>
        <div className="items">
          <Card />
        </div>
        <div className="items">
          <Card />
        </div>
      </div>
		</>
	);
};

export default Catalogo;
