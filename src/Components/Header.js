import React from 'react'
import Search from './Search'
import { Link, withRouter } from 'react-router-dom'

const headerStyle = {
    width: '100%',
    height: '400px',
    margin: '0 0 0 0',
    backgroundImage: 'url("abstract-black-and-white-blur-book-261763.jpg")',
    backgroundSize: '100%',
    overflow: 'auto',
    fontSize: '300%'
}
const linkStyle = {
    color: '#180836',
    fontFamily: 'Marck Script, cursive',
    marginLeft: '2%',
    textDecoration: 'none'
}
const searchStyle = {

}

const Header = () => {
return (
    <div style={headerStyle}>
        <Link style={linkStyle}
            to='/'>
            Growing Up Broken
        </Link>
        <Search />
    </div>
)

}

export default withRouter(Header)