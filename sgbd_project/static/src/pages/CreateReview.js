import React, { useState } from "react";
import './styles/CreateReview.css';
import Star from "../components/Star"


export default function CreateReview() {
    const movie = (new URLSearchParams(window.location.search)).get('movie');

    const [comment, setComment] = useState('');
    const [rating, setRating] = useState("");
    let url = 'https://www.example.com/api/create-item';


    const handleClick = event => {
        console.log('rating: ', rating);
        console.log('comment: ', comment);
        console.log('movie: ', movie);

        //postRequest();
    };
    
    function postRequest(){
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              name: 'my-item',
              description: 'this is my item',
            }),
            headers: {
              'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            // do something with the data here
        });          
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
                    <Star/>
                </div>
                <div className='comment-container'>  
                    <p className='review-title' id='comment'>What are your thoughts about the movie? </p>
                    <textarea className='comment' type="text" name="comment" onChange={event => setComment(event.target.value)}
                    value={comment}/>
                </div>
                <div className = 'submit-button-div'>
                    <button onClick={handleClick} className='submit-button' type = 'submit'>SUBMIT</button>
                </div>
            </div> 
            
       
    );
}