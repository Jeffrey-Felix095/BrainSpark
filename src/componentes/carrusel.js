import React from "react";
import '../hojasDeEstilos/medio.css';

function Carrusel(props) {
    return (
        <div className="layer2">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={require('../imagenes/ima1.jpg')} id='img2' alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                        <h5 className="carrusel-title">Transformar tu negocio fisico a digital</h5>
                        <p className="carrusel-texto">Esto permite a las organizaciones ver su negocio a través del lente de los datos en lugar del objetivo del proceso. De repente, los datos dejan claro que la gente importa y que la experiencia del cliente importa.</p>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={require('../imagenes/ima2.jpg')} id='img2' alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                        <h5 className="carrusel-title">Optimizar aplicaciones web</h5>
                        <p className="carrusel-texto">Mejora la experiencia y satisfacción de los visitantes. Logra una mayor comunicación y feedback con el usuario.</p>
                    </div>

                    <div className="carousel-item">
                        <img src={require('../imagenes/ima3.jpg')} id='img2' alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                        <h5 className="carrusel-title">Analisis de trafico web</h5>
                        <p className="carrusel-texto">Sin duda más tráfico son más posibilidades de ventas, sin embargo, es fundamental aplicar una analítica web conforme a objetivos específicos para poder crear las estrategias puntuales que no sólo incrementen las visitas, sino que atraigan a clientes potenciales.</p>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
            <div className="card" id="card2">
                <div className="card-body" >
                    <h1 className='cAm1'>Contamos con un equipo de profesionales.</h1>
                </div>
            </div>
        </div>

    );
}

export default Carrusel;