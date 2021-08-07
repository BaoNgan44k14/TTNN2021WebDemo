import React from 'react'
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom'
import LayoutAdmin from './adminpage/layout/LayoutAdmin'
import LayoutHome from './homepage/layout/LayoutHome'


export default function AppRouter(props) {
    return (
        <Router>
            <Switch>
                <Route path="/admin" >
                    <LayoutAdmin/>
                </Route>
                <Route path="/" >
                    <LayoutHome/>
                </Route>
            </Switch>
        </Router>
    )
}
