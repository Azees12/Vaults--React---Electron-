import React, {useState} from 'react';
import './SignUp.css';
import { FaUserCircle, FaLock  } from 'react-icons/fa';
import axios from 'axios'


function SignUp () {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        const data = { 
        username: username,
        password: password,
        }

        console.log(data)
    }

    return (
    <div className="form" >
        <div className="form-group">
        <div><icons><FaUserCircle/> </icons>
            <label>Username</label>
        </div>
            <input type="text" name="username" onChange ={e => setUsername(e.target.value)}/>
        </div>
        
    <div className="form-group">
    <div><icons><FaLock/></icons>
        <label> Password</label>
        </div>
        <input type="password" name="password" onChange ={e => setPassword(e.target.value) }/>
    </div>

    <div className="form-group">
    <div><icons><FaLock/></icons>
        <label> Re-enter Password</label>
        </div>
        <input type="password" name="password" onChange ={e => setPassword2(e.target.value)} />
    </div>

    <div className="form-group">
        <button type="button" className="btn" onClick= {handleSubmit}> Sign Up </button>
    </div> 
    </div>
    )
   
}

export default SignUp;