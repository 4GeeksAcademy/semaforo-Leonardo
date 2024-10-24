import React from "react";
import LuzSemaforo from "./LuzSemaforo";

// Create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="row justify-content-center mt-5">
				<div className="col-4 mt-2">
					<div id="semaforo" className="text-center">
						<LuzSemaforo color="verde" />
						<LuzSemaforo color="amarillo" />
						<LuzSemaforo color="rojo" />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
