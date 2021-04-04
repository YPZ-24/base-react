import React, { Component, useState } from 'react'
import '../styles/SignInForm.css'
import pencilImage from '../images/pencil.png'

function SentForm() {
    const [text, setText] = useState('Type Something')

    const changeHandler = (e) => {
        const inValue = e.target.value 
        setText(inValue)
    }

    const submitHandler = (e) => {
        alert("Enviando")
        e.preventDefault()
    }

    return (
        <div className="container">
            <img src={pencilImage} alt="pencil" />
            <form onSubmit={submitHandler}>
                <input type="text" onChange={changeHandler} type="text" placeholder="Type Something"/>
                <p>{text}</p>
                <button>SENT</button>
            </form>
        </div>
    )
}

export default SentForm
