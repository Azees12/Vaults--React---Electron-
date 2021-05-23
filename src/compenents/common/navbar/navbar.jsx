import React from 'react'
import { FaBars, FaSignOutAlt } from 'react-icons/fa';
import useStore from '../../../store/userStore';
import { Redirect, useHistory } from 'react-router';
import './navbar.css'

function Navbar(props) {

    const user = useStore(state => state.username)
  
    return (

        <div className="Navbar"> 
            <div className="Left"> 
            <div className="utliL">
            <i onClick={props.drawer()} className="sidedrawer" ><FaBars size={18}/> </i>
            <a>MyVaults</a>
            </div>
            
            </div>
            <div className="Right">
                <div className="utliR">
                    <a>Logged in as {user}</a>
                    <i onClick = {props.logout()} className="logout" ><FaSignOutAlt size={18}/> </i>
             </div>
                
            </div>
        </div>
    )
}


export default Navbar;