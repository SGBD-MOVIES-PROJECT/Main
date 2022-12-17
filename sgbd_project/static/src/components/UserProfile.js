import React, { useEffect } from "react";
import { useState, useContext } from "react";
import axios from "axios";
import "./UserProfile.css";
import ReviewsProfile from "../pages/ReviewsProfile"
import tokenService from "../api/tokenService"; 

const baseUrl="http://127.0.0.1:8000/api/";

const UserProfile = () => {

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
    })
  }

  useEffect(() => {},
    Profile(),
    []);
  return (
    <div className="full-cont">
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      <div className='card-cont'>
        
        <div className="card">
          <img src="team-male.jpg" alt="John" style={{ width: "100%" }} />
          <h1>{Name}</h1>
          <p className="title8">{username}</p>
          <p>{email}</p>
          <a href="#">
            <i className="fa fa-dribbble" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
          <a href="#">
            <i className="fa fa-instagram" />
          </a>
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
          <p>
            <button className="button6">EDIT PROFILE</button>
          </p>
        </div>
      </div>

      <ReviewsProfile/>
    </div>
  );
};
export default UserProfile;
