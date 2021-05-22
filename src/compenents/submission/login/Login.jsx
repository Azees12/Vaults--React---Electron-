import React, {useState} from 'react';
import './login.css';
import { FaUserCircle, FaLock  } from 'react-icons/fa';


function Login () {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        const data = { 
            username: username,
            password: password,
            }

     console.log(data)
    
    }

    

    return (
    <form className="form" >
        <div className="form-group">
        <div><icons><FaUserCircle/></icons>
            <label> Username</label>
        </div>
            <input type="text" name="username" onChange ={e => setUsername(e.target.value)} />
            
        </div>
        
    <div className="form-group">

        <div><icons><FaLock/></icons>
        <label> Password</label>
        </div>
        <input type="password" name="password" onChange ={e => setPassword(e.target.value)} />
    </div>
    <div className="form-group">
        <button type="button" className="btn" onClick = {handleSubmit} > Login </button>
    </div>
    </form>
    )
   
}

export default Login;