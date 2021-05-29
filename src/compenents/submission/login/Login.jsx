import React from 'react';
import './login.css';
import { FaUserCircle, FaLock  } from 'react-icons/fa';
import { useLogin} from './../../Logic';



function Login () {
    
    const { handleChange, handleSubmit, values, errors} = useLogin();
    

    return (

    <form className="form" onSubmit={handleSubmit} >
        <div className="form-group">
        <div><icon><FaUserCircle/></icon>
            <label> Username</label>
        </div>
            <input  
            type="text" 
            name="username"
            className="login_input"
            placeholder="Enter Username"
            value={values.username}
            onChange={handleChange} 
            />
            {errors.username &&<div className="error">  <p>*{errors.username}</p></div>}
        </div>
        
    <div className="form-group">
        <div><icon><FaLock/></icon>
        <label> Password</label>
        </div>
        <input 
            type="password" 
            name="password"
            className="login_input"
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