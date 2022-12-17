import React, { useState } from "react";
import './styles/CreateReview.css';


export default function UserProfile() {
    let url = 'https://www.example.com/api/create-item';
    const [showPosts, setshowPosts] = useState();
    let displayData
    const handleClick = event => {
    
    }
    return (
            <div className='full-cont2'>
                <h1>My Reviews</h1>
                <div className = 'submit-button-div'>
                    <button onClick={handleClick} className='submit-button' type = 'submit'>SHOW REVIEWS</button>
                    {showPosts}
                </div>
            </div> 
            
            
       
    );
}