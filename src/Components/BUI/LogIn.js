import React from 'react'
import { connect } from 'react-redux'
import { Link, useRouteMatch, useParams } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import {
    compose,
    withHandlers,
    lifecycle
} from 'recompose'


const inputStyle = {
    display: 'block',
    textAlign: 'center',
    margin: '0 auto',
    marginTop: '25vh'
}
/**/
const LogIn = (props) => {
    const password = 'EdgarAllenPoe'
    let input
    const submit = (value) => {
        if (value === password) {
            console.log('que redirect')
        }
    }

    return (
        <div>
            <form onSubmit={submit(input)}>
            <input 
                style={inputStyle}
                onChange={e => {
                    input = e.target.value
                }}
             />
             </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        bui: state.firestore.data.breenaui
    }
}

export default compose(
    firestoreConnect(() => ['breenaui']),
    connect(mapStateToProps)
)(LogIn)