import React from "react";
import "./Sidebar.css";
import logo from "../../assets/Mi logo.png";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="menu">
                <li>Seguridad</li>
                <li>Proyecto</li>
                <li className="active">Inicio</li>
                <li>Asistente</li>
                <li>Fuentes</li>
                <li>Paneles</li>
                <li>Tableros</li>
            </ul>
        </div>
    );
}

export default Sidebar;
