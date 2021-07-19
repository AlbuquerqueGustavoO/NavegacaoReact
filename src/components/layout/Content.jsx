import React from 'react'
import './content.css'
import { Switch, Route } from 'react-router-dom'
import About from '../../views/exemples/About'
import Home from '../../views/exemples/Home'
import Param from '../../views/exemples/Param'
import NotFound from '../../views/exemples/NotFound'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="/param/:id">
                <Param></Param>
            </Route>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </main>
)

export default Content