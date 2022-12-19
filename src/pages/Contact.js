import React, { useState, useEffect } from 'react';
import BiryaniLeft from '../assets/leftBiryani.jpg';
import '../styles/Contact.css';

function Contact() {
  const initialValues = { fullname: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErros] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]:value });
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErros(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullname) {
      errors.fullname = "Your Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.message) {
      errors.message = "Please leave us some message";
    } 
    return errors;
  };
  
  return (
    <div className='contact'>
        <div className='leftSide'
        style={{ backgroundImage: `url(${BiryaniLeft})` }}> </div>
        <div className='rightSide'>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
           <div className="ui message success">Signed in successfully</div>
            ) : (
           <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
           )}
            <h1>Contact Us </h1>
            <form onSubmit={handleSubmit}>
                <div className='ui divider'>  </div>
                <div className='ui-form'>
                  <div className='field'>
                    <label>Full Name</label>
                    <input 
                    type='text' 
                    name='fullname' 
                    placeholder='Fullname' 
                    value={formValues.fullname}
                    onChange={handleChange}
                    />
                  </div>
                  <p>{formErrors.fullname}</p>
                  <div className='field'>
                    <label>Email</label>
                    <input 
                    type='email' 
                    name='email' 
                    placeholder='Email' 
                    value={formValues.email}
                    onChange={handleChange}
                    />
                  </div>
                 <p>{formErrors.email}</p>
                  <div className='field'>
                    <label>Message </label>
                    <textarea rows='6'
                    type='text' 
                    name='message' 
                    placeholder='Enter Message...' 
                    value={formValues.message}
                    onChange={handleChange}
                    />
                  </div>
                  <p>{formErrors.message}</p>
                  <button className="fluid ui button blue">Submit</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Contact;
