import React from 'react'
import EntryForm from './EntryForm'

const headerStyle = {
    width: '100vw',
    height: '2.5vh',
    margin: '0 0 0 0',
    paddingTop: '5vh',
    backgroundSize: '100%',
    textAlign: 'center',
    color: '#180836',
    fontFamily: 'Marck Script, cursive',
    fontSize: '6vh',
    textDecoration: 'none',
    textShadow: '0 0 10px #ffff4d'
}


const NewEntry = () => {
    return (
        <div>
        <h1 style={headerStyle}>New Entry</h1>
        <EntryForm />
        </div>
    )
}

export default NewEntry