import React from 'react'
import { compose } from 'redux'
import { connect }from 'react-redux'
import { useParams } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'


const entryStyle = {
    backgroundImage: 'linear-gradient(to bottom, rgba(24, 8, 54, .4), rgba(24, 8, 54, 0)',
    marginLeft: '10vw',
    marginRight: '10vw',
    top: '20vh',
    height: '70vh',
    position: 'fixed',
    borderRadius: '10px',
    width: '80vw'
    
}
const titleStyle = {
    color: '#000000',
    fontFamily: 'Playfair Display, serif',
    marginLeft: '5vw',
    marginTop: '3vh',
    textShadow: '0 0 2px #ffffff',
    textAlign: 'center'
}
const paragraphStyle = {
    whiteSpace: 'pre-line',
    marginLeft: '2.5vw',
    marginRight: '2.5vw',
    paddingLeft: '5vw',
    paddingRight: '5vw',
    height: '50vh',
    overflow: 'scroll',
    fontFamily: 'Playfair Display, serif'
}
const Entry = (props) => {
    let { title } = useParams()
    let entry = {}
    entry = props.content.find((doc) => {
        return doc.id === title
    })
    
    
    return (
    <div style={entryStyle}>
        <h1 style={titleStyle}>{title}</h1>
        
        <p className='entry' style={paragraphStyle}>
           {entry.body}
        </p>
        
    </div>
)
}
const mapStateToProps = state => {
    return {
        content: state.firestore.ordered.content ? state.firestore.ordered.content : []
    }
}

export default compose(
    firestoreConnect(() => ['content']),
    connect(mapStateToProps)
)(Entry)