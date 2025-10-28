// Global.js
/*
let Global = {
    urlApi: "",
}
export default Global
*/

//Router.js
/*
import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useParams } from 'react-router-dom'

import Menu from './components/Menu'
import Componentes from './components/Componentes'

export default class Router extends Component {
    render() {
        // Función para componentes que reciben parámetros por URL
        function ComponenteElement() {
            let { id } = useParams();
            return <Componente id={id} />
        }

        // Función para componentes que reciben estado (state)
        function ComponenteStateElement() {
            const location = useLocation();
            const idState = location && location.state ? location.state.id : undefined;
            return (<ComponenteState id={idState} />);
        }

        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detalle/:id" element={<ComponenteElement />} />
                    <Route path="/otra-ruta" element={<ComponenteStateElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
*/

// Menu.js

/*
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "./../Global"
import axios from "axios";

export default class Menu extends Component {
    url = Global.urlApi

    // Cargar datos para un dropdown dinámico
    loadDatos = () => {
        let request = "api/endpoint";
        axios.get(this.url + request).then(response => {
            this.setState({
                datos: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDatos();
    }

    state = {
        datos: [],
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} style={{ width: "60px" }} alt="Logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/">
                                    Inicio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/lista">
                                    Lista
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Entidades
                                </a>
                                <ul className="dropdown-menu">
                                    {this.state.datos.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <NavLink className="dropdown-item"
                                                    to={"/detalle/" + item.id}>
                                                    {item.nombre}
                                                </NavLink>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
*/

//Home.js

/*
import React, { Component } from 'react'
import imagen from "../assets/images/imagen.jpg"

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Título Principal</h1>
                <img src={imagen} alt='imagen descripción' />
            </div>
        )
    }
}
*/

//Tabla.js

/*
import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Tabla extends Component {
    url = Global.urlApi

    // Método para cargar datos
    loadDatos = () => {
        let request = "api/endpoint";
        axios.get(this.url + request).then(response => {
            this.setState({
                datos: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDatos();
    }

    state = {
        datos: []
    }

    render() {
        return (
            <div>
                <h1>Título de la Tabla</h1>
                <Link to="/insertar" className='btn btn-success'>
                    Insertar Nuevo
                </Link>

                <table className='table table-primary'>
                    <thead>
                        <tr>
                            <th>Columna 1</th>
                            <th>Columna 2</th>
                            <th>Columna 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.datos.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.propiedad1}</td>
                                    <td>{item.propiedad2}</td>
                                    <td>
                                        <Link className='btn btn-success'
                                            to={"/detalle/" + item.id}>
                                            Ver Detalle
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
*
//Insertar.js

/*
import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default class Insertar extends Component {
    url = Global.urlApi
    cajaNombre = React.createRef();
    cajaDescripcion = React.createRef();
    cajaAlgoMas = React.createRef();

    insertar = (e) => {
        e.preventDefault();
        console.log("Insertar")
        let nuevo = {
            nombre: this.cajaNombre.current.value,
            descripcion: this.cajaDescripcion.current.value,
            algoMas: this.cajaAlgoMas.current.value
        };
        let request = "api/endpoint";
        axios.post(this.url + request, nuevo).then(response => {
            console.log("Insertado")
            window.location.href = "/tabla";
        })
    }
    render() {
        return (
            <div>
                <h1>Insertar Nuevo</h1>
                <form onSubmit={this.insertar}>
                    <div className='form-group'>
                        <label>Nombre</label>
                        <input type='text' className='form-control' ref={this.cajaNombre} />
                    </div>
                    <div className='form-group'>
                        <label>Descripción</label>
                        <input type='text' className='form-control' ref={this.cajaDescripcion} />
                    </div>
                    <div className='form-group'>
                        <label>Algo mas</label>
                        <input type='text' className='form-control' ref={this.cajaAlgoMas} />
                    </div>
                    <button className='btn btn-success' onClick={this.insertar}>Insertar</button>
                </form>
            </div>
        )
    }
}
*/

// Patrones y trucos útiles

/* NAVEGACIÓN ENTRE COMPONENTES:

   Con parámetro en URL:
   - Link: <Link to={"/detalle/" + item.id}>Ver</Link>

   Pasando state (datos ocultos):
   - Link: <Link to="/ruta" state={{ id: item.id }}>Ver</Link>
   - Recibir en route: let { id } = useParams();

   Botón de volver:
   - <Link to={"/anterior/" + this.props.id}>Volver</Link>
*/

/* AXIOS:

   GET:
   axios.get(url + endpoint).then(response => {
       this.setState({ datos: response.data })
   })

   POST:
   axios.post(url + endpoint, objeto).then(response => {
       window.location.href = "/lista";
   })

   PUT:
   axios.put(url + endpoint + "/" + id, objeto).then(...)

   DELETE:
   axios.delete(url + endpoint + "/" + id).then(...)
*/

/* CICLO DE VIDA IMPORTANTES:

   componentDidMount: se ejecuta al cargar (para cargar datos)
   componentDidUpdate(){
    if (oldprops.propiedad !== this.props.propiedad) {
        this.metodo();
    }
   }
*/

/* REFERENCIAS EN FORMULARIOS:

   - Crear: cajaNombre = React.createRef()
   - Usar: this.cajaNombre.current.value
   - Asignar: ref={this.cajaNombre}
*/

/* MAPEAR DATOS EN TABLAS:

   {this.state.datos.map((item, index) => (
       <tr key={index}>
           <td>{item.propiedad}</td>
       </tr>
   ))}
*/

/* CLASES BOOTSTRAP ÚTILES:

   - Tablas: table, table-primary, table-success
   - Botones: btn, btn-success, btn-primary, btn-danger
   - Listas: list-group, list-group-item
   - Formularios: form-group, form-control
   - Navegación: navbar, nav-link, dropdown-menu
*/

// Checklist para el examen

/*
 1. Crear Global.js con la URL de la API
 2. Configurar Router.js con las rutas necesarias
 3. Crear Menu.jsx para navegación
 4. Crear Home.jsx para página principal
 5. Crear componente de lista si es necesario
 6. Crear componente de detalle si es necesario
 7. Crear componente de inserción si es necesario
 8. Importar componentes en Router.js
 9. Probar navegación entre páginas
 10. Verificar que los datos se carguen correctamente
*/
