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
                <Link to={"/equipos/" + this.props.idJugador} className='btn btn-success'>Volver</Link>
                <ul className='list-group'></ul>
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