import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Jugadores extends Component {
    url = Global.urlApuestas

    findJugadores = () => {
        let request = "api/Jugadores/JugadoresEquipos/" + this.props.idEquipo;
        axios.get(this.url + request).then(response => {
            this.setState({
                jugadores: response.data
            })
        })
    }

    componentDidMount = () => {
        this.findJugadores();
    }

    state = {
        jugadores: []
    }

    render() {
        return (
            <div>
                <Link to={"/equipos/" + this.props.idEquipo} className='btn btn-success'>Volver</Link>
                <table className='table table-primary'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Imagen</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.jugadores.map((jugador, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{jugador.nombre}</td>
                                        <td><img src={jugador.imagen} style={{ height: "50px" }} alt='imagen jugador' /></td>
                                        <td>
                                            <Link className='btn btn-success' to="/detalles" state={{ idJugador: jugador.idJugador }}>Detalles</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

// fechaNacimiento:"11/05/1992"
// idEquipo:3
// idJugador:31
// imagen:"https://tmssl.akamaized.net//images/portrait/header/108390-1572942947.jpg"
// nombre:"Thibaut Courtois"
// pais:"Bélgica"
// posicion:"Portero"