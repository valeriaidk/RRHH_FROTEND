import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaBuilding, FaPhone } from 'react-icons/fa';

export default function AgregarProyecto({ onClose }) {
    const [proyecto, setProyecto] = useState({
        nombrep: "",
        apellidop: "",
        email: "",
        fecha_contratacion: "",
        Rol: "",
        Salario: ""
    });

    const { nombrep, apellidop, email, fecha_contratacion, Rol, Salario } = proyecto;

    const onInputChange = (e) => {
        setProyecto({ ...proyecto, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBackend = "http://localhost:8080/rrhh-app/proyecto";
        await axios.post(urlBackend, proyecto);
        if (onClose) onClose(); // Si usas modal, cierra después de guardar
    };

    return (
        <div className="bg-white rounded shadow p-4">
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="nombrep" className="form-label"><FaUser className="me-2" />Nombre</label>
                        <input type="text" className="form-control" id="nombrep" value={nombrep}
                            onChange={onInputChange} name="nombrep" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="apellidop" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="apellidop" value={apellidop}
                            onChange={onInputChange} name="apellidop" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label"><FaEnvelope className="me-2" />Correo</label>
                        <input type="email" className="form-control" id="email" value={email}
                            onChange={onInputChange} name="email" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="fecha_contratacion" className="form-label"><FaCalendar className="me-2" />Fecha Contratación</label>
                        <input type="date" className="form-control" id="fecha_contratacion" value={fecha_contratacion}
                            onChange={onInputChange} name="fecha_contratacion" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="Rol" className="form-label"><FaMapMarkerAlt className="me-2" />Rol</label>
                        <input type="text" className="form-control" id="Rol" value={Rol}
                            onChange={onInputChange} name="Rol" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="Salario" className="form-label"><FaBuilding className="me-2" />Salario</label>
                        <input type="number" className="form-control" id="Salario" value={Salario}
                            onChange={onInputChange} name="Salario" />
                    </div>
                </div>

                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary px-4 me-3">Guardar</button>
                    <button type="button" className="btn btn-secondary px-4" onClick={onClose}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}
