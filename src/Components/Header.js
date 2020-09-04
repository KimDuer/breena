import React from 'react'

import { Link, withRouter } from 'react-router-dom'

const headerStyle = {
    width: '100vw',
    height: '15vh',
    margin: '0 0 0 0',
    top: '2vh',
    backgroundSize: '100%',
    position: 'fixed',
    textAlign: 'center'
}
const linkStyle = {
    color: '#180836',
    fontFamily: 'Marck Script, cursive',
    fontSize: '6vh',
    textDecoration: 'none',
    textShadow: '0 0 10px #ffff4d'
}

const h3Style = {
    margin: '0',
    textShadow: '0 0 2px #ffffff'
}
const h2Style = {
    fontFamily: 'Marck Script, cursive',
    margin: '0',
    color: '#180836',
    textShadow: '0 0 10px #ffff4d'
}

const Header = () => {
return (
    <div style={headerStyle}>
        <Link style={linkStyle}
            to='/'>
            Growing Up Broken
        </Link>
        <h3 style={h3Style}> a collection of original writing by </h3>
        <h2 style={h2Style}>Breena Byerly</h2>
    </div>
)

}

export default withRouter(Header)