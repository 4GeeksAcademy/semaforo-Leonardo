import React from "react";

const LuzSemaforo = ({ color, brillo, onClick, isActive }) => {
    const brilloClass = brillo == "encendido" ? "brillo" : null;
    const activeClass = isActive ? "active" : "";

    return (
        <button 
            id={brillo} 
            className={`${color} ${brilloClass} ${activeClass} mt-4 mb-4`} 
            
            onClick={onClick}
        >
        </button>
    );
};

export default LuzSemaforo;