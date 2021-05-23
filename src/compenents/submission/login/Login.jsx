import React from 'react';
import './login.css';
import { FaUserCircle, FaLock  } from 'react-icons/fa';
import { useLogin} from './../../Logic';



function Login ({submitForm}) {
    
    const { handleChange, handleSubmit, values, errors, api_error } = useLogin(submitForm);
    

    return (

    <form className="form" onSubmit={handleSubmit} >
        <div className="form-group">
        <div><icons><FaUserCircle/></icons>
            <label> Username</label>
        </div>
            <input  
            type="text" 
            name="username"
            placeholder="Enter Username"
            value={values.username}
            onChange={handleChange} 
            />
            {errors.username &&<div className="error">  <p>*{errors.username}</p></div>}
        </div>
        
    <div className="form-group">
        <div><icons><FaLock/></icons>
        <label> Password</label>
        </div>
        <input 
            type="password" 
            name="password" 
            placeholder="Enter Password"
            value={values.password}
            onChange={handleChange} 
        />
             {errors.password &&<div className="error">  <p>*{errors.password}</p></div>}
    </div>
    <div className="form-group">
    {errors.api   &&<div className="error_api">  <p>*{errors.api}</p></div>}
        <button type="submit" className="btn" > Login </button>
    </div>
    
    </form>
    )
   
}

export default Login;