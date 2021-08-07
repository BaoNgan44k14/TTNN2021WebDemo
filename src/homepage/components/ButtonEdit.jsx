import React from 'react'


const ButtonEdit = props => {

    return (
       <button 
        className="btnEdit"
        onClick={props.onClick ? () => props.onClick() : null}
       >
        <span className="btnEdit__txt">{props.children}</span>
       </button>
    )
}

export default ButtonEdit
