import { React, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import 'boxicons'


import logo from '../../assets/images/logo2.png'
import Dropdown from '../../allcomponents/dropdown/Dropdown'
import user_menu from '../../assets/datajson/user_menulogin.json'

const mainNav = [
    {
        display: "Trang Chủ",
        path:"/home"
    },
    {
        display: "Sản Phẩm",
        path:"/products"
    },
    {
        display: "Về chúng tôi",
        path:"/about"
    },
    {
        display: "Liên Hệ",
        path:"/contact"
    }
    
]


const renderUserMenu=(item, index) => (
    <Link to='/login' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

const Header = () => {
    // Đặt biến bằng vị trí đối tượng đại diện cho URL hiện hành 
    const { pathname } = useLocation();
    // Gán activeNav bằng đường dẫn của từng chỉ mục tương ứng
    const activeNav = mainNav.findIndex(e => e.path === pathname);

    // Tạo active khi click vào icon menu sẽ hiển thị ra thanh menu trên tablet và mobile
    const menuLeft = useRef(null);

    const menuToggle = () => menuLeft.current.classList.toggle('active');
    return (
        <div className="header shrink">
            <div className="container">
                <div className="header__logo">
                    <Link>
                        <img src={logo} alt=""/>
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                         <i class='bx bx-menu-alt-left'></i>
                    </div>
                    <div className="header__menu__left" ref = {menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i class='bx bx-chevron-left'></i>
                        </div>
                            {
                                mainNav.map((item, index) => (
                                    // add activeNav vào thanh công cụ để hoàn thành thao tác 
                                    <div className={`header__menu__items 
                                    header__menu__left__items 
                                    ${index === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}>
                                     
                                        <Link to={item.path}>
                                            <span>{item.display}</span>
                                        </Link>
                                    </div>
                                ))
                            }
                    </div>
                    <div className="header__menu__right">
                        <div className=" header__menu__items header__menu__right__item">
                            <div className="header__search">
                                <input type="Search" className="header__search__input" placeholder="Search" />
                                <button className="header__search__icon">
                                    <i class='bx bx-search' ></i>
                                </button>
                            </div>
                        </div>
                        <div className=" header__menu__items header__menu__right__item">
                            <Link to="/cart">
                                    <i class='bx bx-shopping-bag' ></i>
                            </Link>
                        </div>
                        <div className=" header__menu__items header__menu__right__item">
                            
                            <Dropdown
                                icon = "bx bx-user"
                                contentData={user_menu}
                                renderItems={(item, index) => renderUserMenu(item, index)}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
