import React from 'react'
import { Link } from 'react-router-dom'
// 

import logo from '../../assets/images/logo2.png'



const footerAboutLinks = [
    {
        display: "Giới Thiệu",
        path: "/about"
    },
    {
        display: "Liên Hệ",
        path: "/about"
    },
    {
        display: "Tuyển Dụng",
        path: "/about"
    },
    {
        display: "Tin Tức",
        path: "/about"
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "Chính sách đổi trả",
        path: "/about"
    },
    {
        display: "Chính sách bảo hành",
        path: "/about"
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/about"
    }
]



const footer = () => {
    return (
      <footer className="footer">
          <div className="grid2 wide">
          <div className="row2">
                <div className="col2 l-2-4 m-4 c-6">
                    <h3 className="footer__title">
                    CHĂM SÓC KHÁCH HÀNG
                    </h3>
                    <ul className="footer__content">
                    <li class="footer__list-item">
                            <a href="" class="footer_list-link">Trung tâm trợ giúp</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="" class="footer_list-link">Shopee Block</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="" class="footer_list-link">Shopee Mail</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="" class="footer_list-link">Hướng dẫn mua hàng</a>
                        </li>
                    </ul>
                </div> 

                <div className="col2 l-2-4 m-4 c-6">
                    <h3 class="footer__title">THEO DÕI</h3>
                    <ul class="footer__list">
                        <li class="footer__list-item">
                            <a href="" class="footer_list-link">
                                <i class="footer__list-item-icon bx bxl-facebook-circle"></i>
                                Facebook</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="" class="footer_list-link">
                                <i class="footer__list-item-icon bx bxl-instagram-alt"></i>
                                Instagram</a>
                        </li>
                        <li class="footer__list-item">
                            <a href="" class="footer__list-link">
                                <i class="footer__list-item-icon bx bxl-twitter"></i>
                                Twitter</a>
                        </li>
                    </ul>
                </div>

                <div className="col2 l-2-4 m-4 c-6">
                     <h3 className="footer__title">
                         GIỚI THIỆU
                    </h3>
                    <div className="footer__content">
                       {
                           footerAboutLinks.map((item, index) => (
                               <li key={index}>
                                   <Link to={item.path}>
                                       {item.display}
                                   </Link>
                               </li>
                           ))
                       }
                    </div>
                </div> 

                <div className="col2 l-2-4 m-4 c-6">
                     <h3 className="footer__title">
                        CHÍNH SÁCH
                    </h3>
                    <div className="footer__content">
                       {
                           footerCustomerLinks.map((item, index) => (
                               <li key={index}>
                                   <Link to={item.path}>
                                       {item.display}
                                   </Link>
                               </li>
                           ))
                       }
                    </div>
                </div> 
                <div className="col2 l-2-4 m-8 c-12" >
                    <div className="footer__title">
                        <p className="footer__logo"> 
                            <Link to="/">
                                <img src={logo} className="footer__logo-img" atl="" />
                            </Link>
                        </p>
                        <p className="footer__logo-info"> 
                        Website Demo By Bao Ngan 44k14 - Da Nang University Economic
                        </p>
                    </div>
                </div>
            </div>
          </div>
          {/* */}
      </footer>
    )
}

export default footer
