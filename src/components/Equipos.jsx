import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Equipos extends Component {
    url = Global.urlApuestas

    findEquipo = () => {
        let request = "api/equipos/" + this.props.idEquipo
        axios.get(this.url + request).then(response => {
            this.setState({
                equipo: response.data
            })
        })
    }

    componentDidMount = () => {
        this.findEquipo()
    }
    componentDidUpdate = (oldprops) => {
        if (oldprops.idEquipo !== this.props.idEquipo) {
            this.findEquipo();
        }
    }

    state = {
        equipo: []
    }
    render() {
        return (<div>
            <h1>Detalles de equipo {this.props.idEquipo}</h1>
            <div>
                <ul className='list-group'>
                    {
                        this.state.equipo &&
                        <div>
                            <li className='list-group-item'>ID: {this.state.equipo.idEquipo}</li>
                            <li className='list-group-item'>Nombre: {this.state.equipo.nombre}</li>
                            <li className='list-group-item'>Imagen:
                                <img src={this.state.equipo.imagen} alt='imagen equipo' style={{ width: "150px" }} />
                            </li>
                            <li className='list-group-item'>Champions: {this.state.equipo.champions}</li>
                            <li className='list-group-item'>Web: <a href={this.state.equipo.web}>{this.state.equipo.web}</a></li>
                            <li className='list-group-item'>Descripcion: {this.state.equipo.descripcion}</li>
                            <li className='list-group-item'>Finalista: {this.state.equipo.finalista} vez</li>
                            <li className='list-group-item'>
                                <Link className='btn btn-success' to="/jugadores" state={{ idEquipo: this.state.equipo.idEquipo }}>Jugadores</Link>
                            </li>
                        </div>
                    }
                </ul>
            </div>
        </div>)
    }
}
// {
//   "idEquipo": 0,
//   "nombre": "string",
//   "imagen": "string",
//   "champions": 0,
//   "web": "string",
//   "descripcion": "string",
//   "finalista": 0
// }