import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class DetallesJugador extends Component {
    url = Global.urlApuestas

    findJugadores = () => {
        let request = "api/Jugadores/" + this.props.idJugador;
        axios.get(this.url + request).then(response => {
            this.setState({
                jugador: response.data
            })
        })
    }

    componentDidMount = () => {
        this.findJugadores();
    }

    state = {
        jugador: []
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Detalles del jugador {this.state.jugador.nombre}</h1>
                    <p>ID: {this.state.jugador.idJugador}</p>
                    <img src={this.state.jugador.imagen} alt='imagen jugador' style={{ height: "50px" }} />
                    <p>Pais: {this.state.jugador.pais}</p>
                    <p>Posicion: {this.state.jugador.posicion}</p>
                    <p>Fecha de nacimiento: {this.state.jugador.fechaNacimiento}</p>
                    <Link className='btn btn-success' to="/jugadores" state={{ idEquipo: this.state.jugador.idEquipo }}>Volver a jugadores</Link>
                </div>
            </div>
        )
    }
}