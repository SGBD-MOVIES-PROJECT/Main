import React, { useEffect } from "react";
import { useState, useContext } from "react";
import axios from "axios";
import tokenService from "../api/tokenService"; 
 const baseUrl="http://127.0.0.1:8000/api/";

export const Profile = () => {
var bodyFormData = new FormData();
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [Name, setName] = useState(''); //per get del token



function Profile() {

    axios.get(baseUrl+"perfil/" ,{
        headers: {
            'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + tokenService.getLocalAccessToken().replace(/['"]+/g, '')
        }, data: bodyFormData

    }).then(response => {
        setUsername(JSON.stringify(response.data[0].username).replace(/['"]+/g, ''));
        setEmail(JSON.stringify(response.data[0].email).replace(/['"]+/g, ''));
        setName(JSON.stringify(response.data[0].fullName).replace(/['"]+/g, ''));
        
        
     }
    )

}
    
    useEffect(() => {},
    Profile(),
    []);
    

     return (
      <div>
     
        <h2>Username: {username}</h2>
        <h2>Email: {email}</h2>
        <h2>Name: {Name}</h2>]
        
        
      </div>
    );
  }
  
  export default Profile;