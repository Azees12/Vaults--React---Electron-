import React, {useEffect} from 'react';
import useStore from '../../store/userStore';
import './postLogin.css';
import { SideDrawer, Navbar,Backdrop} from '../../compenents/common';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import Vault from '../../compenents/application';

function PostLogin(){
    
    
    const [isOpen,setOpen] = useState(false)
    const history = useHistory()
    const clearUser = useStore(state => state.clearUser)
    const state = useStore(state => state)
    const token = useStore(state => state.token)
    
    let sideDrawer;
    let backdrop;


    function open ()  {
        setOpen(!isOpen)
        console.log("happend")
        console.log(isOpen)
    }

    const logout = () => {
        console.log(token)
        clearUser()
        history.push('/')
    }


    useEffect(() => {
        console.log(isOpen)
    }, [isOpen])

    if(isOpen){
         sideDrawer = <SideDrawer drawer={()=>open} /> 
         backdrop = <Backdrop close={()=> open}/>
    }
  

    return (

        <div >
            <Navbar logout = {()=> logout}drawer={() => open}/>
            {backdrop}
            {sideDrawer}

            <Vault/>
            
            
        </div>
        


    );
}

export default PostLogin;



