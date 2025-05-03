import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBuilding, FaMoneyBillWave } from 'react-icons/fa';


export default function EditarEmpleado() {
    const urlBackend = "http://localhost:8080/rrhh-app/empleados";
    let Navegacion = useNavigate();

    const {id} = useParams();
    const [empleado, setEmpleados] = useState({
        apellido: "",
        nombre: "",
        sueldo: "",
        direccion: "",
        telefono: "",
        email: "",
        area: ""
    });

    const { apellido, nombre, area, sueldo, direccion, telefono, email } = empleado;

    useEffect(()   => {
        cargarEmpledo();
    },[])
    

    const cargarEmpledo = async () => {
        const resultado = await axios.get(`${urlBackend}/${id}`)
        setEmpleados(resultado.data)
    }

    const onInputChange = (e) => {
        setEmpleados({ ...empleado, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`${urlBackend}/${id}`, empleado)
        Navegacion("/");
    };
    return (
        <div className="d-flex justify-content-center" style={{ backgroundColor: '#ffffff', marginTop: '40px' }}>
            <div className="bg-white rounded shadow p-5" style={{ maxWidth: '700px', width: '100%' }}>
                <h2 className="text-center mb-4 text-primary">Editar Empleado</h2>
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
                            <label htmlFor="email" className="form-label"><FaEnvelope className="me-2" />Correo electrónico</label>
                            <input type="email" className="form-control" id="email" placeholder="Correo electrónico"
                                value={email} onChange={onInputChange} name="email" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="direccion" className="form-label"><FaMapMarkerAlt className="me-2" />Dirección</label>
                            <input type="text" className="form-control" id="direccion" placeholder="Dirección"
                                value={direccion} onChange={onInputChange} name="direccion" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="area" className="form-label"><FaBuilding className="me-2" />Área</label>
                            <input type="text" className="form-control" id="area" placeholder="Área o departamento"
                                value={area} onChange={onInputChange} name="area" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="sueldo" className="form-label"><FaMoneyBillWave className="me-2" />Sueldo</label>
                            <input type="number" className="form-control" id="sueldo" placeholder="Sueldo mensual"
                                value={sueldo} onChange={onInputChange} name="sueldo" />
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary px-4 me-3">Guardar </button>
                        <a href='/' className='btn btn-secondary px-4'>Regresar</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
