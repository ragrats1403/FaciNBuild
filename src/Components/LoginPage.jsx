import { useState } from 'react';
import '../css/LoginPage.css';
import logo from '../images/Brown_logo_faci.png';
import usericon from '../icons/8.png';
import passicon from '../icons/7.png';

function Loginform() {
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    //Validation Check  
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    if(!values.username) {
      errors.username = "Please enter your username.";
    }
    else if(!regex.test(values.username)) {
      errors.username = "Please check your username.";
    }
    if(!values.password) {
      errors.password = "Please enter your password.";
    }
    return errors;
  };
  
  return (
    <div className="formContainer">        
      <form onSubmit={(e) => handleSubmit(e)}>
        <img className="imagecontainer" src = {logo}/>
        <hr/>
        <div className="uiForm">
        <div className="formField">
            <label>Username</label>
            <input type="text" placeholder="Username" name="username" onChange={(e) => handleChange(e)}
            />
            <img className='usericon' src = {usericon}/>
          </div>
          <p className='errorMsg'>{formErrors.username}</p>
        <div className="formField">
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" onChange={(e) => handleChange(e)}
            />
            <img className='usericon' src = {passicon}/>
          </div>
          <p className='errorMsg'>{formErrors.password}</p>
          <button className="submitBtn">Login</button>
          {Object.keys(formErrors).length === 0 && isSubmit && ( //If no errors contained, return login successful.
            <div className="msgOk">Login Successful.</div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Loginform;