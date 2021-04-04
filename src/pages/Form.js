import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import SentForm from '../components/SentForm'

export class Principal extends Component {
    render() {
        return (
            <div>
                <Navigation appName="U - REACT"/>
                <SentForm/>
            </div>
        )
    }
}

export default Principal
