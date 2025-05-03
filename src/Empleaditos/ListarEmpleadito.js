import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ListarEmpleadito() {
    const urlBackend = "http://localhost:8080/rrhh-app/empleadito";
    const [empleadito, setEmpleadito] = useState([]);

    useEffect(() => {
        cargarEmpleadito();
    }, []);

    const cargarEmpleadito = async () => {
        try {
            const resultado = await axios.get(urlBackend);
            setEmpleadito(resultado.data);
        } catch (error) {
            console.error("Error al cargar empleados:", error);
        }
    };

    const eliminarEmpleadito = async (id) => {
        await axios.delete(`${urlBackend}/${id}`);
        cargarEmpleadito();
    };

    return (
        <div className="container py-4">
            <div className="text-center mb-2">
                <h2 className="fw-bold text-primary">Sistema de Recursos Humanos</h2>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="text-secondary">Lista de Empleaditos</h5>
                <Link to="/agregar" className="btn btn-success">Agregar Empleadito</Link>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Inicio</th>
                        <th>Fin</th>
                        <th>Presupuesto</th>
                        <th>Status</th>
                        <th>Cliente</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {empleadito.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.nombree}</td>
                            <td>{emp.descripcion}</td>
                            <td>{emp.fecha_inicio}</td>
                            <td>{emp.fecha_fin}</td>
                            <td>{emp.presupuesto}</td>
                            <td>{emp.status}</td>
                            <td>{emp.nombre_cliente}</td>
                            <td>
                                <Link to={`/editar/${emp.id}`} className="btn btn-primary btn-sm me-2">Editar</Link>
                                <button onClick={() => eliminarEmpleadito(emp.id)} className="btn btn-danger btn-sm">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
