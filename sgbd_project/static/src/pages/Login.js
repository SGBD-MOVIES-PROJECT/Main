import { useRef, useState, useEffect, useContext } from 'react';
import axios from "axios";
import md5 from 'md5';
import { json } from "react-router";
import AuthContext from "../context/AuthProvider";

const baseUrl="http://127.0.0.1:8000/api/login/";


export const Login = (props) => {
    const [success, setSuccess] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setAuth } = useContext(AuthContext);

    var bodyFormData = new FormData();
    bodyFormData.append('username', 'prova');
    bodyFormData.append('password', '123456Q$');

     const handleSubmit = async (e) => {
        e.preventDefault();
      const response= await axios({
            method: "post",
            url:baseUrl,
            data: bodyFormData,
            headers: { "Content-Type": "application/json" },

          })
          setSuccess(true);
          alert(JSON.stringify(response?.data));
          const accessToken = response?.data?.access_token;
          setAuth({ username, password, accessToken });
          setUsername('');
          setPassword('');





    }

    return (
        success ? (
            <section>
                <h1>You are logged in!</h1>
                <h2>Username: {AuthContext.useAuth}</h2>
                <br />
                <p>
                    <a href="#">Go to Home</a>
                </p>
            </section>
        ) : (


        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">USERNAME</label>
                <input className="login-inputs" value={username} onChange={(e) => setUsername(e.target.value)}type="username" placeholder="username" id="username" name="username" />
                <label htmlFor="password">PASSWORD</label>
                <input className="login-inputs" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="**" id="password" name="password" />
                <button className = "login-top-button" type="submit">Log In</button>
            </form>
            <button className="login-bottom-button" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    ))
}

export default Login;
