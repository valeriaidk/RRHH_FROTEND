import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaBuilding, FaPhone, FaCalendar } from 'react-icons/fa';

export default function EditarProyecto() {
    const urlBackend = "http://localhost:8080/rrhh-app/proyecto";
    const navigate = useNavigate();
    const { id } = useParams();

    const [proyecto, setProyecto] = useState({
        nombrep: "",
        apellidop: "",
        email: "",
        fecha_contratacion: "",
        Rol: "",
        Salario: ""
    });

    useEffect(() => {
        cargarProyecto();
    }, []);

    const cargarProyecto = async () => {
        const resultado = await axios.get(`${urlBackend}/${id}`);
        setProyecto(resultado.data);
    };

    const onInputChange = (e) => {
        setProyecto({ ...proyecto, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`${urlBackend}/${id}`, proyecto);
        navigate("/");
    };

    return (
        <div className="bg-white rounded shadow p-4">
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="nombrep" className="form-label"><FaUser className="me-2" />Nombre</label>
                        <input type="text" className="form-control" id="nombrep" value={proyecto.nombrep}
                            onChange={onInputChange} name="nombrep" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="apellidop" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="apellidop" value={proyecto.apellidop}
                            onChange={onInputChange} name="apellidop" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label"><FaEnvelope className="me-2" />Correo</label>
                        <input type="email" className="form-control" id="email" value={proyecto.email}
                            onChange={onInputChange} name="email" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="fecha_contratacion" className="form-label"><FaCalendar className="me-2" />Fecha Contratación</label>
                        <input type="date" className="form-control" id="fecha_contratacion" value={proyecto.fecha_contratacion}
                            onChange={onInputChange} name="fecha_contratacion" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="Rol" className="form-label"><FaMapMarkerAlt className="me-2" />Rol</label>
                        <input type="text" className="form-control" id="Rol" value={proyecto.Rol}
                            onChange={onInputChange} name="Rol" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="Salario" className="form-label"><FaBuilding className="me-2" />Salario</label>
                        <input type="number" className="form-control" id="Salario" value={proyecto.Salario}
                            onChange={onInputChange} name="Salario" />
                    </div>
                </div>

                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary px-4 me-3">Guardar</button>
                    <button type="button" className="btn btn-secondary px-4" onClick={() => navigate("/")}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}
