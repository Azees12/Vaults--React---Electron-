export default function validateLogin(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }else{
        
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  }