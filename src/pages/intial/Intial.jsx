import React, { Suspense } from 'react';
import {Footer} from './../../compenents/common';
import {Login} from '../../compenents/submission'
import vault from '../../images/vault.png'
import './intial.css'
import { useState } from "react";
import {SignUp} from './../../compenents/submission';
import MoonLoader from "react-spinners/ClipLoader";





function Intial () 

{
 
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index);
    };
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
      setIsSubmitted(true);
    }

    return (
        <div className="body">
        <div className="main">


        
        
      <div className="">
        <div className="image">
            <img src= {vault} alt="something here"/>
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
        <Suspense fallback= { <body className="App-body">
        <div className="App-Intial">
         <MoonLoader color={"#ffff"}  size={150} />
        </div>
        </body>}>
        <div className="switch">
          {
              toggleState === 1 ? <Login submitForm={submitForm} /> : <SignUp/>
          }
        </div> 
        </Suspense>
            <Footer/>
        
        </div>

 
       
        
       
        </div>
      </div>
       )
} 

export default Intial;