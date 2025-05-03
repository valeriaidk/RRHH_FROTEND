import React from 'react';

export default function Navegacion() {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#2c3e50' }}>
                <div className="container-fluid">
                    <a className="navbar-brand text-white fw-bold" href="#">Recursos Humanos</a>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-white" aria-current="page" href="/">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/cliente">cliente</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/empleado">Empleado</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/empleadito">Empleditos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/proyecto">proyecto</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-warning" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
