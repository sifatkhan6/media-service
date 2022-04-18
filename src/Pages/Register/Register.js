import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.vaue;
        const password = event.target.password.value;
    }

    return (
        <div className='register-form'>
            <h2 className='mt-4 text-center'>Please Register</h2>
            <form className='mt-4' onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Your Email address' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="submit" value="Register" />

            </form>
            <p>Already user? <Link to="/login" className='text-primary text-decoration-none' onClick={navigateLogin}> Login</Link></p>
        </div>
    );
};

export default Register;