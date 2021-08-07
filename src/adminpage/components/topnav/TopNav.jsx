import React from 'react'
import './topnav.css'
import { Link } from 'react-router-dom'

// 

import Dropdown from '../../../allcomponents/dropdown/Dropdown'
import notifications from '../../../assets/datajson/notification.json'
import user_menu from '../../../assets/datajson/user_menu.json'

const curr_user = {
    display_name: "Bao Ngan"
}



const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__icon">
        <i class='bx bxs-user-circle' ></i>
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu=(item, index) => (
    <Link to='/dashboard' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)




const TopNav = () => {
    return (
        <div className='topnav'>
            <div className="topnav__search">
                <input className="topnav__search-input" placeholder="Search here..."/>
                <i className="bx bx-search"></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    <Dropdown
                        customToggle={()=>renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>
                <div className="topnav__right-item">
                    <Dropdown 
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter= {()=> <Link to='/dashboard'>
                            View All
                        </Link>}
                    />

                </div>
                <div className="topnav__right-item">
                    <Dropdown/>

                </div>
            </div>
        </div>
    )
}

export default TopNav
