import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useParams } from 'react-router-dom'
import MenuApuestas from './components/MenuApuestas'
import Home from './components/Home'
import Apuestas from './components/Apuestas'
import Equipos from './components/Equipos'
import Jugadores from './components/Jugadores'
import DetallesJugador from './components/DetallesJugador'
import InsertarApuesta from './components/InsertarApuesta'


export default class Router extends Component {
    render() {
        function EquiposElement() {
            let { idEquipo } = useParams();
            return <Equipos idEquipo={idEquipo} />
        }
        function JugadoresElement() {
            const location = useLocation();
            const idState = location && location.state ? location.state.idEquipo : undefined;
            return (<Jugadores idEquipo={idState} />);
        }
        function DetallesElement() {
            const location = useLocation();
            const idState = location && location.state ? location.state.idJugador : undefined;
            return (<DetallesJugador idJugador={idState} />);
        }

        return (
            <BrowserRouter>
                <MenuApuestas />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/apuestas" element={<Apuestas />} />
                    <Route path="/insertarapuesta" element={<InsertarApuesta />} />
                    <Route path="/equipos/:idEquipo" element={<EquiposElement />} />
                    <Route path="/jugadores" element={<JugadoresElement />} />
                    <Route path="/detalles" element={<DetallesElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}