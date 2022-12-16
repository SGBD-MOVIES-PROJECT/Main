import React, { useState } from "react";
import axios from "axios";
import md5 from 'md5';

const baseUrl="http://127.0.0.1:8000/api/login/";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    var bodyFormData = new FormData();
    bodyFormData.append('username', 'prova');
    bodyFormData.append('password', '123456Q$');

    const handleSubmit = async (e) => {
        await axios({
            method: "post",
            url:baseUrl,
            data: bodyFormData,
            headers: { "Content-Type": "application/json" },
          })
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                alert(respuesta.id);
                //cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
               // cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
               // cookies.set('nombre', respuesta.nombre, {path: "/"});
               // cookies.set('username', respuesta.username, {path: "/"});
              //  alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
               // window.location.href="./menu";
               console.log(response);
               console.log("holaaaaaaa");
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            alert(error);
         
        })
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">EMAIL</label>
                <input className="login-inputs" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">PASSWORD</label>
                <input className="login-inputs" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className = "login-top-button" type="submit">Log In</button>
            </form>
            <button className="login-bottom-button" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}