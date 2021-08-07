import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Router from '../Router'
// 
import Header from '../components/Header'
import Footer from '../components/Footer'


const LayoutHome = () => {
    return (
        <BrowserRouter>
            <Route render = {props => (
                <div>
                    <Header {...props} />
                    <div className="container">
                        <div className="main">
                            <Router />
                        </div>
                    </div>
                    <Footer/>
                    <div class="footer__bottom">
                        <div class="grid wide">
                            <p class="footer__test">© 2021 - Bản quyền thuộc về Công ty TNHH Milen</p>
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default LayoutHome
