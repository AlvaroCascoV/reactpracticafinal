import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Apuestas extends Component {
    url = Global.urlApuestas

    findApuestas = () => {
        let request = "api/Apuestas";
        axios.get(this.url + request).then(response => {
            this.setState({
                apuestas: response.data
            })
        })
    }

    componentDidMount = () => {
        this.findApuestas();
    }

    state = {
        apuestas: []
    }
    render() {
        return (
            <div>
                <h1>Apuestas</h1>
                <Link to="/insertarapuesta" className='btn btn-success'>Insertar Apuesta</Link>
                <table className='table table-primary'>
                    <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Resultado</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.apuestas.map((apuesta, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{apuesta.usuario}</td>
                                        <td>{apuesta.resultado}</td>
                                        <td>{apuesta.fecha}</td>
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
