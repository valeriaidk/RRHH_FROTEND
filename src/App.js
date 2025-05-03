import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleado from "./empleados/ListadoEmpleado";
import Navegacion from "./plantilla/Navegacion";
import AgregarEmpleado from "./empleados/AgregarEmpleado";
import EditarEmpleado from "./empleados/EditarEmpleado";
import ListadoClientes from "./clientes/ListadoClientes";
import AgregarCliente from "./clientes/AgregarCliente";
import EditarCliente from "./clientes/EditarCliente";
import ListarEmpleadito from "./Empleaditos/ListarEmpleadito";
import AgregarEmpleadito from "./Empleaditos/AgregarEmpleadito";
import EditarEmpleadito from "./Empleaditos/EditarEmpleadito";

function App() {
  return (
    <div className="container">
      <div className="container">
      <BrowserRouter>
      <Navegacion/>
      <Routes>
        <Route exact path="/empleado" element={<ListadoEmpleado/>}/>
        <Route exact path="/agregar" element={<AgregarEmpleado/>}/>
        <Route exact path="/editar/:id" element={<EditarEmpleado/>}/>
        <Route exact path="/cliente" element={<ListadoClientes/>}/>
        <Route exact path="/agregar" element={<AgregarCliente/>}/>
        <Route exact path="/editar/:id" element={<EditarCliente/>}/>
        <Route exact path="/empleadito" element={<ListarEmpleadito/>}/>
        <Route exact path="/agregar" element={<AgregarEmpleadito/>}/>
        <Route exact path="/editar/:id" element={<EditarEmpleadito/>}/>
        <Route path="/proyecto" element={<ListarProyecto />} />
        <Route path="/agregar" element={<AgregarProyecto />} />
        <Route path="editar/:id" element={<EditarProyecto />} />
      </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
