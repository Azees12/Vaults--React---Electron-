import { useState, useEffect, React } from 'react';
import validateLogin from './validation';
import axios from 'axios'
import useStore from './../../../store/userStore'

const useLogin = () => {

    const setUser = useStore(state => state.setUser)
    const username = useStore(state => state.username)
    const [res,setRes] = useState({})
    const [values, setValues] = useState({
        username: '',
        password: '', 
      });
      const [errors, setErrors] = useState({});
    
      const handleChange = e => {
        setValues({
          ...values,
          [e.target.name]: e.target.value
        });
      };
      
      const handleSubmit = e => {
        e.preventDefault();
        
        setErrors(validateLogin(values));
        if (Object.keys(validateLogin(values)).length === 0) {
         axios.post("http://localhost:5000//MyVaults/signin",values).then(data => setRes(data.data))
         console.log(errors === {})
         console.log(errors)
         console.log(res.status =="True")
        }
        } 

    
  useEffect(
    () => {
      if (Object.keys(errors).length === 0) {
        if(res.status === "False"){
                setErrors({api:res.error}) 
            }
        if(res.token != undefined)
            {
          setUser(res.token,res.username,res.user_id)
            }
    }
      console.log(res,username)
      
    },
    [res]
  );
    
    
    
      return { handleChange, handleSubmit, values, errors };

        };

        export default useLogin;