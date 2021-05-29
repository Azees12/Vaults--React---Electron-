import React from 'react'
import './ModalBack.css'
function ModalBack (props) {
    return(
        <div onClick={ props.close()} className="backdrop2"> </div>
    )
}

export default ModalBack