import React from 'react'

const ButtonDelete = props => {

    return (
       <button 
        className="btnDelete"
        onClick={props.onClick ? () => props.onClick() : null}
       >
        <span className="btnDelete__txt">{props.children}</span>
       </button>
    )
}

export default ButtonDelete
