import React from "react";
import "./Overview.css";
import {
    FaFolder,
    FaInfoCircle,
    FaDatabase,
    FaChartBar,
    FaColumns
} from "react-icons/fa";
import previewImg from "../assets/vista-previa-del-panel.jpg";

function Overview() {
    return (
        <div className="dashboard">
            {/* Proyecto seleccionado con detalles */}
            <div className="card project-details-card">
                <div className="card-header with-icon">
                    <FaFolder /> Proyectos disponibles
                </div>
                <div className="card-body split-body">
                    {/* Selección de Proyecto */}
                    <div className="left-section">
                        <label htmlFor="fuente-select">Selecciona un proyecto:</label>
                        <select id="fuente-select" className="styled-select">
                            <option>AGUA POTABLE Y SANEAMIENTO BÁSICO</option>
                        </select>
                        <p><strong>Total:</strong> 2</p>
                    </div>

                    {/* Detalles del Proyecto */}
                    <div className="right-section">
                        <div className="card-subheader">
                            <FaInfoCircle /> Detalles del Proyecto
                        </div>
                        <div className="project-info">
                            <div className="meta-info">
                                <p><strong>Título:</strong> AGUA POTABLE Y SANEAMIENTO BÁSICO</p>
                                <p><strong>Descripción:</strong> No registra</p>
                                <p><strong>Fuente de datos:</strong> e26c8...b3c1</p>
                                <p><strong>Creado:</strong> 22 de septiembre de 2023, 5:03 a. m.</p>
                                <p><strong>Última modificación:</strong> 22 de septiembre de 2023</p>
                                <p><strong>Autor:</strong> adminAguaMinvivienda</p>
                                <p><strong>Grupo:</strong> AguaMinvivienda</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fuentes de datos */}
            <div className="card">
                <div className="card-header">
                    <FaDatabase /> Fuentes de datos
                </div>
                <div className="card-body">
                    <div className="card-section">
                        <label htmlFor="fuente-select">Fuente:</label>
                        <select id="fuente-select" className="styled-select">
                            <option>MINVIVIENDA_AGUA_SANEAMIENTO</option>
                        </select>
                        <div className="highlight-total">
                            <strong>Total:</strong> 1
                        </div>
                    </div>
                </div>
            </div>

            {/* Paneles creados */}
            <div className="card">
                <div className="card-header">
                    <FaChartBar /> Paneles creados
                </div>
                <div className="card-body">
                    <div className="card-section">
                        <label htmlFor="panel-select">Panel:</label>
                        <select id="panel-select" className="styled-select">
                            <option>ESTADO AL CORTE DE LOS PROYECTOS EN SEGUIMIENTO</option>
                        </select>

                        <div className="highlight-total">
                            <strong>Total:</strong> 42
                        </div>

                        <div className="meta-info">
                            <p><strong>Nombre:</strong> ESTADO AL CORTE DE LOS PROYECTOS EN SEGUIMIENTO</p>
                            <p><strong>Descripción:</strong> No registra</p>
                            <p><strong>Creado:</strong> 25 de septiembre de 2023, 6:54 a. m.</p>
                            <p><strong>Última modificación:</strong> 25 de septiembre de 2023</p>
                            <p><strong>Autor:</strong> admin</p>
                        </div>

                        <div className="preview-image-wrapper">
                            <img src={previewImg} alt="Vista previa del panel" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <FaColumns /> Tableros creados
                </div>
                <div className="card-body">
                    <div className="card-section">
                        <label htmlFor="dashboardSelect">Tablero:</label>
                        <select id="dashboardSelect" className="enhanced-select">
                            <option>INDICADORES EN MATERIA DE AGUA POTABLE...</option>
                        </select>

                        <p className="highlighted-total"><strong>Total:</strong> 3</p>

                        <div className="project-info">
                            <div className="meta-info">
                                <p><strong>Nombre:</strong> INDICADORES EN MATERIA DE AGUA POTABLE Y SANEAMIENTO BÁSICO V1</p>
                                <p><strong>Descripción:</strong> No registra</p>
                                <p><strong>Creado:</strong> 26 de septiembre de 2023, 3:57 a. m.</p>
                                <p><strong>Última modificación:</strong> 26 de septiembre de 2023</p>
                                <p><strong>Autor:</strong> admin</p>
                            </div>
                        </div>

                        <div className="preview-image-wrapper">
                            <img src={previewImg} alt="Vista previa del panel" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
