import React from 'react'
import { Route, Switch } from 'react-router-dom'
// 
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'
import Login from './components/Login'
import Register from './components/Register'

const Router = () => {
    return (
        <Switch>
            <Route path='/home' exact component={Home} />
            <Route path='/cart' exact component={Cart} />
            <Route path='/products' exact component={Products} />
            <Route path='/detail/:slug' exact component={ProductDetail} />
            <Route path='/login' exact  component={Login}/>
            <Route path='/register' exact component={Register}/>
        </Switch>
    )
}

export default Router
