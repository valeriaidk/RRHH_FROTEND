import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AgregarCliente from './AgregarCliente';

export default function ListadoClientes() {
    const urlBackend = "http://localhost:8080/rrhh-app/cliente";
    const [cliente, setCliente] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);

    useEffect(() => {
        cargarcliente();
    }, []);

    const cargarcliente = async () => {
        try {
            const resultado = await axios.get(urlBackend);
            setCliente(resultado.data);
        } catch (error) {
            console.error("Error al cargar cliente:", error);
        }
    };

    const eliminarcliente = async (id) => {
        await axios.delete(`${urlBackend}/${id}`);
        cargarcliente();
    };

    const abrirModal = () => setMostrarModal(true);
    const cerrarModal = () => {
        setMostrarModal(false);
        cargarcliente(); 
    };

    return (
        <div className="container py-4">
           <div className="text-center mb-2">
                <h2 className="fw-bold text-primary">Sistema de Recursos Humanos</h2>
            </div>

           
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="text-secondary">Lista de Cliente</h5>
                <button onClick={abrirModal} className="btn btn-success">
                    + Agregar Cliente
                </button>
            </div>

            
            <div className="table-responsive">
                <table className="table table-hover table-bordered align-middle">
                    <thead className="table-dark text-center">
                        <tr>
                            <th>#</th>
                            <th>Apellidos</th>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>Dirección</th>
                            <th>Email</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cliente.map((cliente) => (
                            <tr key={cliente.idCliente}>
                                <td className="text-center">{cliente.idCliente}</td>
                                <td>{cliente.apellido}</td>
                                <td>{cliente.nombre}</td>
                                <td>{cliente.telefono}</td>
                                <td>{cliente.direccion}</td>
                                <td>{cliente.email}</td>
                                <td className="text-center">
                                    <div className="btn-group" role="group">
                                        <Link
                                            to={`/editar/${cliente.idCliente}`}
                                            className="btn btn-outline-warning btn-sm"
                                        >
                                            Editar
                                        </Link>
                                        <button
                                            onClick={() => eliminarcliente(cliente.idCliente)}
                                            className="btn btn-outline-danger btn-sm"
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            
            {mostrarModal && (
                <div className="modal d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Agregar Cliente</h5>
                                <button type="button" className="btn-close" onClick={cerrarModal}></button>
                            </div>
                            <div className="modal-body">
                                <AgregarCliente onClose={cerrarModal} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
