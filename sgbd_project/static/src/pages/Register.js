import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">FULL NAME</label>
            <input className="login-inputs" type="text" name="name" id="name" placeholder="full name" />{/* value={name} */}
            <label htmlFor="email">EMAIL</label>
            <input className="login-inputs" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">PASSWORD</label>
            <input className="login-inputs" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button className= "login-top-button" type="submit">Sign In</button>
        </form>
        <button className="login-bottom-button" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}