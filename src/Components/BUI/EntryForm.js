import React, { Component } from 'react'
import { withFirestore } from 'react-redux-firebase'


const inputStyle = {
    display: 'block',
    marginTop: '10vh'
}
const textareaStyle = {
    display: 'block',
    textAlign: 'left',
    marginTop: '5vh',
    height: '60vh',
    width: '70vw',
    resize: 'none'
}
const containerStyle = {
    display: 'block',
    margin: '0 auto',
    width: '70vw',
    height: '70vw',
}

const buttonStyle = {
    width: '100px',
    height: '4vh',
    marginTop: '5vh'
}
class EntryForm extends Component {


    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.firestore.collection('content').doc(`${this.state.title}`).set({
            title: this.state.title,
            body: this.state.body
        })
        this.setState({
            title: '',
            body: ''
        })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        return (    
            <form onSubmit={this.handleSubmit}>
                <div style={containerStyle}>

                    <input 
                        style={inputStyle}
                        name='title'
                        placeholder='title'
                        value={this.state.title}
                        onChange={this.handleInputChange}
                    />
                    <textarea 
                        style={textareaStyle}
                        name='body'
                        value={this.state.body}
                        onChange={this.handleInputChange}
                    />
                    <input 
                        style={buttonStyle}
                        name='submit'
                        type='submit'
                        value='submit'
                    ></input>
                </div>
            </form>
        )
    }
}

export default withFirestore(EntryForm)