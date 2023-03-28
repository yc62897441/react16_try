import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './containers/HomePage'
import UseState from './containers/UseState'

import './index.css'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/UseState">
                        <UseState />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
