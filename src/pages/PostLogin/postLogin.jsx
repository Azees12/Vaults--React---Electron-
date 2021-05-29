import React, {useEffect} from 'react';
import useStore from '../../store/userStore';
import './postLogin.css';
import { SideDrawer, Navbar,Backdrop,NewVault, Footer} from '../../compenents/common';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import Vault from '../../compenents/application/vault';
import ModalBack from './../../compenents/common/modals/modalBack';
function PostLogin(){
    
    
    const[open2,setModal] = useState(false)
    const [isOpen,setOpen] = useState(false)
    const history = useHistory()
    const clearUser = useStore(state => state.clearUser)
    const token = useStore(state => state.token)
    
    let backdrop;
    let modalBack;


    function open ()  {
        setOpen(!isOpen)
        console.log("happend")
        console.log("sidebar",isOpen)
        console.log("modal",open2)
    }

    function modal(){
        setModal(!open2);
        console.log(open2)
    }

    const logout = () => {
        console.log(token)
        clearUser()
        history.push('/')
    }



    if(isOpen){
        
         backdrop = <Backdrop close={()=> open}/>
    }
   
    if(open2){
        
        modalBack = <ModalBack close={()=> modal}/>
    }


    

    return (

        <div className="post">
            <Navbar logout = {()=> logout}drawer={() => open}/>
            <SideDrawer drawer={isOpen} modal={modal} /> 
            {backdrop}
            <div className="modal_centre">
                <NewVault show={open2} modal={modal}/> 
            </div>
            
            {modalBack}
     
            <Vault/>
        <footer className='post_footer'>
            @MyVaults made using React and Electron & Powered by a custom Python API
        </footer> 
        </div>
        


    );
}

export default PostLogin;



