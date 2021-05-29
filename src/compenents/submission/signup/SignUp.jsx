import React from 'react';
import './SignUp.css';
import { FaUserCircle, FaLock,FaCheckCircle } from 'react-icons/fa'
import { useSignUp} from './../../Logic';
import { create } from 'zustand';


function SignUp ({submitForm}) {
    
    const { handleChange, handleSubmit, values, errors, success } = useSignUp(submitForm);

    return (
    <div className="form" >
        <div className="form-group">
        <div><icons><FaUserCircle/> </icons>
            <label>Username</label>
        </div>
            <input 
            type="text" 
            name="username"
            placeholder="Create a Username"
            className="login_input"
            value={values.username}
            onChange={handleChange} />
        </div>
        {errors.username &&<div className="error">  <p>*{errors.username}</p></div>}
        
    <div className="form-group">
    <div><icons><FaLock/></icons>
        <label> Password</label>
        </div>
        <input 
        type="password" 
        name="password"
        placeholder="Create a Password"
        className="login_input"
        value={values.password}
        onChange={handleChange} 
        />
           {errors.password &&<div className="error">  <p>*{errors.password}</p></div>}


    </div>

    <div className="form-group">
    <div><icons><FaLock/></icons>
        <label> Re-enter Password</label>
        </div>
        <input 
        type="password" 
        name="password2" 
        placeholder="Re-enter Password"
        className="login_input"
        value={values.password2}
        onChange={handleChange} 
        />
         {errors.password2 &&<div className="error">  <p>*{errors.password2}</p></div>}
         
    </div>
    <div className="form-group">
         {success ?  <div className="success"> <icon> <FaCheckCircle/></icon><p>User created </p> </div> : <div> </div>}
         {errors.api &&<div className="error_api">  <p>*{errors.api}</p></div>}
        <button type="button" className="btn" onClick= {handleSubmit}> Sign Up </button>
    </div> 
    </div>
    )
   
}

export default SignUp;