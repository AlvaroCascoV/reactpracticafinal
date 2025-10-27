import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class InsertarApuesta extends Component {
    url = Global.urlApuestas
    cajaId = React.createRef();
    cajaUsuario = React.createRef();
    cajaResultado = React.createRef();
    cajaFecha = React.createRef();

    insertarApuesta = (e) => {
        e.preventDefault();
        console.log("Insertar Apuesta")

        let nuevaApuesta = {
            idApuesta: parseInt(this.cajaId.current.value),
            usuario: this.cajaUsuario.current.value,
            resultado: this.cajaResultado.current.value,
            fecha: this.cajaFecha.current.value
        };

        let request = "api/Apuestas";
        axios.post(this.url + request, nuevaApuesta)
            .then(response => {
                console.log("Apuesta insertada")
                window.location.href = "/apuestas";
            })
    }
    render() {
        return (
            <div>
                <h1>Insertar Apuesta</h1>
                <form>
                    <div className='form-group'>
                        <label>ID Apuesta</label>
                        <input type='number' className='form-control' ref={this.cajaId} />
                    </div>
                    <div className='form-group'>
                        <label>Usuario</label>
                        <input type='text' className='form-control' ref={this.cajaUsuario} />
                    </div>
                    <div className='form-group'>
                        <label>Resultado</label>
                        <input type='text' className='form-control' ref={this.cajaResultado} />
                    </div>
                    <div className='form-group'>
                        <label>Fecha</label>
                        <input type='text' className='form-control' ref={this.cajaFecha} />
                    </div>
                    <button className='btn btn-success' onClick={this.insertarApuesta}>Insertar Apuesta</button>
                </form>
            </div>
        )
    }
}
