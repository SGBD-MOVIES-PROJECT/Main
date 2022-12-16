import React, { useState } from "react";
import './styles/CreateReview.css';
import Select from 'react-select';



export default function CreateReview() {
    const movie = (new URLSearchParams(window.location.search)).get('movie');
    const ratings = [
        { value: '---', label: '---' },
        { value: '10', label: '10' },
        { value: '9', label: '9' },
        { value: '8', label: '8' },
        { value: '7', label: '7' },
        { value: '6', label: '6' },
        { value: '5', label: '5' },
        { value: '4', label: '4' },
        { value: '3', label: '3' },
        { value: '2', label: '2' },
        { value: '1', label: '1' },
        { value: '0', label: '0'}
      ]
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState("");
    let url = 'https://www.example.com/api/create-item';

    function setr(){
        setRating('10');
    }

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
                    <Select className='rating' 
                        options={ratings} defaultValue={ratings[0]} onChange={(choice) => setRating(choice.value)}
                    />
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