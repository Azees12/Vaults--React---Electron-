import { useState, useEffect } from 'react';
import validateSignUp from './validation';
import axios from 'axios'


const useSignUp = () => {
    const [res,setRes] = useState({})
    const [success, setSuccess] = useState(false)
    const [values, setValues] = useState({
        username: '',
        password: '',
        password2:''
      });
      const [errors, setErrors] = useState({});
    
      const handleChange = e => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
      };
    
      const handleSubmit = e => {
        e.preventDefault();

        setErrors(validateSignUp(values));
        if (Object.keys(validateSignUp(values)).length === 0) {
          axios.post("http://localhost:5000//MyVaults/signup",values).then(data => setRes(data.data))
          console.log(errors === {})
          console.log(errors)
          console.log(res.status)
        }
      };
    
      useEffect(
        () => {
          setSuccess(false)
          console.log(success)
          if (Object.keys(errors).length === 0) {
            if (res.status === "False") {
                    setErrors({api:res.error})
                  }
            if (res.status === "True") {
                    setSuccess(true)
                  }
    
        }
      },
         [res]
      );
    
      return { handleChange, handleSubmit, values, errors, success };
        
        };

        export default useSignUp;