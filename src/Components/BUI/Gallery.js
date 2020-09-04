import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link, useRouteMatch, useParams } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import Header from '../Header'
import Search from '../Search'

const titleStyle = {
    color: '#000000',
    fontFamily: 'Playfair Display, serif',
    margin: '19vh auto 0',
    textShadow: '0 0 2px #ffffff',
    textAlign: 'center'
}
const entryStyle = {
    backgroundImage: 'linear-gradient(to bottom, rgba(24, 8, 54, .4), rgba(24, 8, 54, 0)',
    margin: '0 auto 2vh',
    padding: '0 0 0 0',
    height: '60vh',
    borderRadius: '10px',
    width: '80vw'
}
const liStyle = {
    textDecoration: 'none',
    fontFamily: 'Playfair Display, serif',
    listStyleType: 'none',
    textAlign: 'center',
    color: '#000000',
    fontSize: '4vh',
    paddingLeft: '1vw'
}

const Gallery = (props) => {
    let { url } = useRouteMatch();
    let titles = []
    titles = props.content.map((doc) => {
        return (
            <li key={doc.id} style={liStyle}>
                <Link 
                    style={liStyle} 
                    to={url+'/'+doc.id}>
                        {doc.id}
                </Link>
            </li>
        )
    }) 
    return (
        <div>
            <Header />
            <h1 style={titleStyle}>Gallery</h1>
            <ul style={entryStyle}>{titles}</ul>
            <Search />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        content: state.firestore.ordered.content ? state.firestore.ordered.content : []
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateEntry: (entry) => dispatch({ type: 'UPDATE_ENTRY', entry })
    }
}

export default compose(
    firestoreConnect(() => ['content']),
    connect(mapStateToProps, mapDispatchToProps)
)(Gallery)