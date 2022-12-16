import React, { useState } from "react";
import axios from "axios";

var baseUrl = 'http://127.0.0.1:8000/api/register/';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [fullName, setName] = useState('');
    const [username, setUsername] = useState('');
    var bodyFormData = new FormData();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log(fullName);
        console.log(username);
        bodyFormData.append('username',username)
        bodyFormData.append('fullName',fullName)
        bodyFormData.append('email', email)
        bodyFormData.append('password', password)
        bodyFormData.append('password2', password2)
        
        await axios({
            method: "post",
            url:baseUrl,
            data: bodyFormData,
            headers: { "Content-Type": "application/json" },
          })
        .then(response=>{
            return response.data;
        })    
        
        props.onFormSwitch('login')    
    }
   

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">USERNAME</label>
            <input className="login-inputs" value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" placeholder="username" />{/* value={name} */}
            <label htmlFor="name">FULL NAME</label>
            <input className="login-inputs" value={fullName} onChange={(e) => setName(e.target.value)} type="text" name="fullName" id="fullName" placeholder="fullName" />{/* value={name} */}
            <label htmlFor="email">EMAIL</label>
            <input className="login-inputs" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">PASSWORD</label>
            <input className="login-inputs" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="password2">REPEAT PASSWORD</label>
            <input className="login-inputs" value={password2} onChange={(e) => setPassword2(e.target.value)} type="password" placeholder="********" id="password2" name="password2" />
            <button className= "login-top-button" type = 'submit' >Sign In</button>
        </form>
        <button className="login-bottom-button" onClick={() =>  props.onFormSwitch('login')} type = 'submit'>Already have an account? Login here.</button>
    </div>
    )

    
}