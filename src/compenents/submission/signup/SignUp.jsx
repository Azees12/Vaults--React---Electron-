import React from 'react';
import './SignUp.css';
import { FaUserCircle, FaLock  } from 'react-icons/fa'
import { useSignUp} from './../../Logic';


function SignUp () {
    
    const { handleChange, handleSubmit, values, errors } = useSignUp();

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
        value={values.password2}
        onChange={handleChange} 
        />
         {errors.password2 &&<div className="error">  <p>*{errors.password2}</p></div>}
    </div>

    <div className="form-group">
        <button type="button" className="btn" onClick= {handleSubmit}> Sign Up </button>
    </div> 
    </div>
    )
   
}

export default SignUp;