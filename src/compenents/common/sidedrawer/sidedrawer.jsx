import React from 'react';
import './sidedrawer.css'

function SideDrawer  (props)  {
let drawerClasses = 'sidebody'
    if (props.drawer()) {
      drawerClasses = 'sidebody open'
    }
return (
<nav className={drawerClasses}> 
    <ul>
        Vaults
    </ul>
</nav>

)
}

export default SideDrawer