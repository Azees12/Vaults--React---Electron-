import React from 'react'
import './backdrop.css'
function Backdrop (props) {
    return(
        <div onClick={ props.close()} className="backdrop"> </div>
    )
}

export default Backdrop