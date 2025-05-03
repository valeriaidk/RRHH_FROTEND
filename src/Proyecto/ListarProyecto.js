import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AgregarProyecto from './AgregarProyecto';

export default function ListarProyecto() {
    const urlBackend = "http://localhost:8080/rrhh-app/proyecto";
    const [proyectos, setProyectos] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);

    useEffect(() => {
        cargarProyecto();
    }, []);

    const cargarProyecto = async () => {
        try {
            const resultado = await axios.get(urlBackend);
            setProyectos(resultado.data);
        } catch (error) {
            console.error("Error al cargar proyectos:", error);
        }
    };

    const eliminarProyecto = async (id) => {
        await axios.delete(`${urlBackend}/${id}`);
        cargarProyecto();
    };

    const abrirModal = () => setMostrarModal(true);
    const cerrarModal = () => {
        setMostrarModal(false);
        cargarProyecto();
    };

    return (
        <div className="container py-4">
            <div className="text-center mb-2">
                <h2 className="fw-bold text-primary">Sistema de Recursos Humanos</h2>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="text-secondary">Lista de Proyectos</h5>
                <button onClick={abrirModal} className="btn btn-success">
                    + Agregar Proyecto
                </button>
            </div>

            <div className="table-responsive">
                <table className="table table-hover table-bordered align-middle">
                    <thead className="table-dark text-center">
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Fecha Contratación</th>
                            <th>Rol</th>
                            <th>Salario</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {proyectos.map((p, index) => (
                            <tr key={p.idProyecto}>
                                <td>{index + 1}</td>
                                <td>{p.nombrep}</td>
                                <td>{p.apellidop}</td>
                                <td>{p.email}</td>
                                <td>{p.fecha_contratacion}</td>
                                <td>{p.Rol}</td>
                                <td>${Number(p.Salario).toLocaleString()}</td>
                                <td className="text-center">
                                    <Link to={`/editar/${p.idProyecto}`} className="btn btn-warning btn-sm me-2">Editar</Link>
                                    <button onClick={() => eliminarProyecto(p.idProyecto)} className="btn btn-danger btn-sm">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {mostrarModal && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Agregar Proyecto</h5>
                                <button type="button" className="btn-close" onClick={cerrarModal}></button>
                            </div>
                            <div className="modal-body">
                                <AgregarProyecto onClose={cerrarModal} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
