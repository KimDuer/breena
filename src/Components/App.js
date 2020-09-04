import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './Landing'
import LogIn from './BUI/LogIn'
import Gallery from './BUI/Gallery'
import NewEntry from './BUI/NewEntry'



const backgroundStyles = {
    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0)), url("public/abstract-black-and-white-blur-book-261763.jpg")',
    backgroundSize: 'fill',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    overflow: 'auto'
}

const App = () => {
    return (
        <div style={backgroundStyles}>
            
            <BrowserRouter>

                <Switch>
                    <Route path="/" component={Landing} exact={true}/>
                    <Route path="/login" component={LogIn} />
                    <Route path="/new-entry" component={NewEntry} />
                    <Route path="/gallery/:title">
                        <Landing location={location} />
                    </Route>
                    <Route path="/gallery" component={Gallery} />
                </Switch>
                
            </BrowserRouter>
        </div>
    )
}

export default App