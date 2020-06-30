import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './Landing'
import LogIn from './BUI/LogIn'
import Header from './Header'


const App = () => {
    return (
        <div>
            
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" component={Landing} exact={true}/>
                    <Route path="/breena" component={LogIn} />
                </Switch>
                
            </BrowserRouter>
        </div>
    )
}

export default App