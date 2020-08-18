import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App.js'

import { Provider } from 'react-redux'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reduxFirestore, firestoreReducer, getFirestore, createFirestoreInstance } from 'redux-firestore'
import firebase from 'firebase/app'
import 'firebase/firestore'
import thunk from 'redux-thunk'
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCkz8md-YLbOtLaYlVn_rXL11Sujsrw2ro",
    authDomain: "growing-up-broken.firebaseapp.com",
    databaseURL: "https://growing-up-broken.firebaseio.com",
    projectId: "growing-up-broken",
    storageBucket: "growing-up-broken.appspot.com",
    messagingSenderId: "945078019726",
    appId: "1:945078019726:web:0d602b74538231ede40bdf",
    measurementId: "G-31QF930DGT"
  }
firebase.initializeApp(firebaseConfig);
firebase.firestore()

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({getFirestore})),
    reduxFirestore(firebase)
))

const rrfConfig = {
    userProfile: 'users'
}
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: Store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
    <Provider store={Store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>, 
    document.getElementById('app')
)