import React from 'react'
import PropTypes from 'prop-types'

const ButtonCart = props => {

    const bg = props.backgroundcolor ? 'bg-' + props.backgroundcolor : 'bg-main'
    const size = props.size ? 'btnCart-' + props.size : ''
    const animate = props.size ? 'btnCart-animate' : ''
    
    return (
       <button 
        className={`btnCart ${bg} ${size} ${animate}`}
        onClick={props.onClick ? () => props.onClick() : null}
       >
        <span className="btnCart__txt">{props.children}</span>
        {
            props.icon ? (
                <span className="btnCart__icon">
                    <i className={`${props.icon} bx-tada`}></i>
                </span>
            ) : null
        }
       </button>
    )
}

ButtonCart.propTypes = {
    backgroundcolor: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    animate: PropTypes.bool,
    onclick: PropTypes.func
}

export default ButtonCart
