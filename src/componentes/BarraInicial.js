import React from "react";
import '../hojasDeEstilos/inicio.css';

function BarraInicial(props) {
    return (
        <header className="header">
            <nav className="navbar bg-light">
                <div className="container-fluid" id="logo">
                    <a className="navbar-brand" href="#">
                        <img src={require('../imagenes/Logo2.png')} alt="Logo" width="65" height="65" />
                        Brain Spark
                    </a>
                    <div>
                        <button className="btn btn-outline-primary botonesf1" type="button">Trabaja con nosotros</button>
                        <button className="btn btn-outline-primary botonesf2" type="button">Contactanos</button>
                    </div>
                </div>
            </nav>
            <div className="carousel" id="carousel1">
                <div className="textIn">
                    <h1 className="cAm1">Hacemos que brillen tus ideas</h1>
                    <p className="cAm2">Te ofrecemos apoyo a ti y a tu empresa en este nuevo mundo digital</p>
                </div>
                <div className="carousel slide" data-bs-ride="carousel" id="slide">
                    <div className="carousel-inner" id="inner">
                        <div className="carousel-item active" id="item">
                            <img className="intro" id="img" src={require('../imagenes/introduccion.jpg')} alt="..." />
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default BarraInicial;