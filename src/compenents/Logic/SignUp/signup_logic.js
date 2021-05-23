import { useState, useEffect } from 'react';
import validateSignUp from './validation';
import axios from 'axios'


const useSignUp = () => {
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
      };
    
      useEffect(
        () => {
          if (Object.keys(errors).length === 0) {
             
          }
        },
        [errors]
      );
    
      return { handleChange, handleSubmit, values, errors };
        
        };

        export default useSignUp;