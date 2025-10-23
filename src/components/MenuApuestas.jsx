import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png"
import Global from "./../Global"
import axios from "axios";

export default class MenuApuestas extends Component {
    url = Global.urlApuestas

    loadEquipos = () => {
        let request = "api/equipos";
        axios.get(this.url + request).then(response => {
            console.log("Leyendo equipos")
            this.setState({
                equipos: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadEquipos();
    }

    state = {
        equipos: [],
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
                                <NavLink className="nav-link active" aria-current="page"
                                    to="/">
                                    Champions
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page"
                                    to="/apuestas">
                                    Apuestas
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Equipos
                                </a>
                                <ul className="dropdown-menu">
                                    {/* cargar dinamicamente equipos */}
                                    {
                                        this.state.equipos.map((equipo, index) => {
                                            return (<li key={index}>
                                                <NavLink className="dropdown-item" to={"/equipos/" + equipo.idEquipo}>{equipo.nombre}</NavLink>
                                            </li>)
                                        })
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}