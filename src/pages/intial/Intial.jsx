import React from 'react';
import {Footer} from './../../compenents/common';
import {Login} from '../../compenents/submission'
import vault from '../../images/vault.png'
import './intial.css'
import { useState } from "react";
import {SignUp} from './../../compenents/submission';


function Intial () {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index);
    };
    return (
        <div>
        <div className="image">
            <img src= {vault}/>
        </div>
        <div className="tab-block">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
        Sign In
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
        Sign Up
        </button>
        </div>
        <div className="switch">
          {
              toggleState === 1 ? <Login/> : <SignUp/>
          }
      
        </div>
       
        
       <Footer/> 
        </div>
      
       )
} 

export default Intial;