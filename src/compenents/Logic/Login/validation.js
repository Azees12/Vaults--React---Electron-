export default function validateLogin(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }else{
        
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
    return errors;
  }