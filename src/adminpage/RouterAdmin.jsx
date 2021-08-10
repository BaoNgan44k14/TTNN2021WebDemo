import React from 'react'
import { Route, Switch } from 'react-router-dom'
// 
import Dashboard from './pages/Dashboard'
import Customer from './pages/Customer'
import Orders from './pages/Orders'
import ProductManagement from './pages/ProductManagement'
import AddProduct from './components/addproducts/AddProduct'
import AddAccount from './components/addaccount/AddAcount'
import LayoutAdmin from './layout/LayoutAdmin'

const RouterAdmin = () => {
    return (
        <Switch>
                <Route path='/dashboard' exact component={Dashboard} />
                <Route path='/orders' exact  component={Orders} />
                <Route path='/management' exact component={ProductManagement} />
                <Route path='/customers' exact component={Customer} />
                <Route path='/newproduct' exact component={AddProduct}/>
                <Route path='/newaccount' exact component={AddAccount}/>
        </Switch>
    )
}

export default RouterAdmin
