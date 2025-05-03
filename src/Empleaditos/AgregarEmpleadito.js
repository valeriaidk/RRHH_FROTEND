import axios from 'axios';
import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBuilding, FaMoneyBillWave } from 'react-icons/fa';

export default function AgregarEmpleadito({ onClose }) {
    const [empleadito, setEmpleadito] = useState({
        nombree: "",
        descripcion: "",
        fecha_inicio: "",
        fecha_fin: "",
        presupuesto: "",
        status: "",
        nombre_cliente: ""
    });

    const onInputChange = (e) => {
        setEmpleadito({ ...empleadito, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBackend = "http://localhost:8080/rrhh-app/empleadito";
        await axios.post(urlBackend, empleadito);
        if (onClose) onClose();
    };

    return (
        <div className="bg-white rounded shadow p-4">
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="nombree" className="form-label"><FaUser className="me-2" />Nombre</label>
                        <input type="text" className="form-control" id="nombree" name="nombree" value={empleadito.nombree} onChange={onInputChange} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="descripcion" className="form-label">Descripcion</label>
                        <input type="text" className="form-control" id="descripcion" name="descripcion" value={empleadito.descripcion} onChange={onInputChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="fecha_inicio" className="form-label">Fecha Inicio</label>
                        <input type="text" className="form-control" id="fecha_inicio" name="fecha_inicio" value={empleadito.fecha_inicio} onChange={onInputChange} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="fecha_fin" className="form-label">Fecha Fin</label>
                        <input type="text" className="form-control" id="fecha_fin" name="fecha_fin" value={empleadito.fecha_fin} onChange={onInputChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="presupuesto" className="form-label">Presupuesto</label>
                        <input type="text" className="form-control" id="presupuesto" name="presupuesto" value={empleadito.presupuesto} onChange={onInputChange} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <input type="text" className="form-control" id="status" name="status" value={empleadito.status} onChange={onInputChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="nombre_cliente" className="form-label">Nombre Cliente</label>
                        <input type="text" className="form-control" id="nombre_cliente" name="nombre_cliente" value={empleadito.nombre_cliente} onChange={onInputChange} />
                    </div>
                </div>
                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary me-2">Guardar</button>
                    <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}
