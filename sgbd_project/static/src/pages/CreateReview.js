import React, { useState } from "react";
import {useContext} from "react";
import './styles/CreateReview.css';
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import tokenService from '../api/tokenService';
import AuthContext from "../context/AuthProvider";
import axios from "axios";

const labels = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
  };
export default function CreateReview() {
    const [value, setValue] = useState(0);
    const movie = (new URLSearchParams(window.location.search)).get('movie');
    const movieID = (new URLSearchParams(window.location.search)).get('id');

    const [comment, setComment] = useState('');

    const history = useHistory();
    const baseUrl="http://127.0.0.1:8000/api/createReview/";


    const HomePage = () => {
        console.log('rating: ', value);
        console.log('comment: ', comment);
        console.log('movie: ', movie);
        console.log('movie id: ', movieID);

        postRequest();

        history.push("/")
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }   

    function postRequest(){

        var bodyFormData = new FormData();        
        bodyFormData.append('titleReview', "Aquest es el titol");
        bodyFormData.append('movie', movieID);
        bodyFormData.append('nota', value);
        bodyFormData.append('review', comment);

        console.log(bodyFormData.values());
        axios({
            method: "post",
            url: baseUrl,
            data: bodyFormData,
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + tokenService.getLocalAccessToken().replace(/['"]+/g, '')
            },
            })
        .then(response=>{
            return response.data;
        })    
    }
    return (
            <div className='full-cont'>
                <h1>Create Review</h1>
                <div className='title-searchbar-container'>  
                    <p className='review-title' id='title'>Movie: </p>
                    <h3 className='movie-title'>{movie}</h3>
                </div>
                <div className='rating-container'>
                    <p className='review-title'>Rating: </p>
                    <Box
                        sx={{
                        '& > legend': { mt: 2 },
                        }}
                        >
                        <Rating
                            name="text-feedback"
                            value={value}
                            defaultValue={null} max={10} 
                            onChange={event => setValue(event.target.value)}
                        />
                        <Box sx={{ ml: 2 }}>Rating: {labels[value]}</Box>
                    </Box>
                </div>
                <div className='comment-container'>  
                    <p className='review-title' id='comment'>What are your thoughts about the movie? </p>
                    <textarea className='comment' type="text" name="comment" onChange={event => setComment(event.target.value)}
                    value={comment}/>
                </div>
                <div className = 'submit-button-div'>
                    <button onClick={HomePage} className='submit-button' type = 'submit'>SUBMIT</button>
                </div>
            </div> 
            
       
    );
}