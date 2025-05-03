import axios from 'axios';
import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


export default function AgregarCliente({ onClose }) {
    const [cliente, setCliente] = useState({
        apellido: "",
        nombre: "",
        telefono: "",
        direccion: "",
        email: "",
    });

    const { apellido, nombre, telefono, direccion, email } = cliente;

    const onInputChange = (e) => {
        setCliente({ ...cliente, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBackend = "http://localhost:8080/rrhh-app/cliente";
        try {
            await axios.post(urlBackend, cliente);
            if (onClose) onClose(); // Cierra el modal si se pasó la prop
        } catch (error) {
            console.error("Error al guardar el cliente:", error);
        }
    };

    return (
        <div className="bg-white rounded shadow p-4">
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="nombre" className="form-label"><FaUser className="me-2" />Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Nombre"
                            value={nombre} onChange={onInputChange} name="nombre" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="apellido" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="apellido" placeholder="Apellido"
                            value={apellido} onChange={onInputChange} name="apellido" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="telefono" className="form-label"><FaPhone className="me-2" />Teléfono</label>
                        <input type="text" className="form-control" id="telefono" placeholder="Teléfono"
                            value={telefono} onChange={onInputChange} name="telefono" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="direccion" className="form-label"><FaMapMarkerAlt className="me-2" />Dirección</label>
                        <input type="text" className="form-control" id="direccion" placeholder="Dirección"
                            value={direccion} onChange={onInputChange} name="direccion" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label"><FaEnvelope className="me-2" />Correo electrónico</label>
                        <input type="email" className="form-control" id="email" placeholder="Correo electrónico"
                            value={email} onChange={onInputChange} name="email" />
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
