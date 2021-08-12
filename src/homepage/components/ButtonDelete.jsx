import React from 'react'

const ButtonDelete = props => {
    const showConfirm = () => {
        window.confirm('Xóa mục này?')
    }
    return (
       <button 
        className="btnDelete"
        onClick = {showConfirm}
       >
        <span className="btnDelete__txt">{props.children}</span>
       </button>
    )
}

export default ButtonDelete
