import React, { useState } from "react";
import LuzSemaforo from "./LuzSemaforo";

// Crea tu primer componente
const Home = () => {
    const [brillo, setBrillo] = useState(false);
    const [colorActivo, setColorActivo] = useState(null);

    const toggleBrillo = (color) => {
        setBrillo(prev => !prev);
        setColorActivo(color);
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-12 col-md-3 mt-5">
                    <div id="semaforo" className="text-center">
                        <LuzSemaforo 
                            color="verde"                              
                            onClick={() => toggleBrillo("verde")} 
                            isActive={colorActivo === "verde"}
                        />
                        <LuzSemaforo 
                            color="amarillo"							
                            onClick={() => toggleBrillo("amarillo")} 
                            isActive={colorActivo === "amarillo"}
                        />
                        <LuzSemaforo 
                            color="rojo"
                            onClick={() => toggleBrillo("rojo")} 
                            isActive={colorActivo === "rojo"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;