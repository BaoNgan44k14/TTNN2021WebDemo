import React from 'react'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'
// Admin
import LayoutAdmin from './adminpage/layout/LayoutAdmin'

// Home Page
import LayoutHome from './homepage/layout/LayoutHome'


function AppRouter() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={LayoutHome} />
                <Route
                exact path="/admin" 
                component={LayoutAdmin} 
                /> 
            </Switch>
        </div>
    )
}



export default AppRouter
