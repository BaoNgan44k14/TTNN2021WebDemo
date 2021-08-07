import React from 'react'
import './layout.css'
import { BrowserRouter, Route } from 'react-router-dom'
import RouterAdmin from '../RouterAdmin'

// 

import Sidebar from '../components/sidebar/Sidebar'
import TopNav from '../components/topnav/TopNav'
// 

const LayoutAdmin = () => {
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className='layout'>
                    <Sidebar {...props} />
                    <div className='layout__content'>
                        <TopNav/>
                        <div className="layout__content-main">
                            <RouterAdmin/>
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default LayoutAdmin
