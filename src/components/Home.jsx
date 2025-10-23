import React, { Component } from 'react'
import clasico from "../assets/images/clasico.jfif"

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <img src={clasico} alt='imagen clasico' />
            </div>
        )
    }
}
