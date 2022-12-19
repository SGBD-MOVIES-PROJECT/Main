import React, { useEffect } from "react";
import { useState, useContext } from "react";
import axios from "axios";
import './styles/CreateReview.css';
import tokenService from "../api/tokenService"; 

const baseUrl="http://127.0.0.1:8000/api/";
var originalTitle;
export default function ReviewsProfile() {
    var bodyFormData = new FormData();
    var bodyFormData2 = new FormData();
    let displayData;
    const [showPosts, setshowPosts] = useState();
  
  
    function getMovieName(movieID) {
        originalTitle = "init";
        let url = "http://127.0.0.1:8000/api/pelicula/filter/?id=";
        axios.get(url + movieID,{
            data: bodyFormData2
        }).then(response => {
            originalTitle = response.data[0].original_title;
            console.log(originalTitle);
        })
        
        return originalTitle;
    }

    function Reviews() {
        axios.get(baseUrl+"showReviews/" ,{
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + tokenService.getLocalAccessToken().replace(/['"]+/g, '')
            }, data: bodyFormData
        }).then(response => {
            displayData = function(){
            let tbodyData=response; 
            //console.log(tbodyData);
            return(
                <div>
                    {   tbodyData.data.map(todo => (
                        
                    <div>
                        <div className="review-container">
                            <div className="r1">
                                {getMovieName(todo.movie)}
                            </div>

                            <div className="r2">
                                <a>{todo.nota}</a>
                            </div>
                            <div className="r3">
                                <h3>{todo.titleReview}</h3>
                                <p>{todo.review}</p> 
                            </div>
                            
                        </div>
                        
                    </div>
                    ))}
            </div>
             )
            }
            setshowPosts(displayData);
        }         
        
            
    )}
             
     

    useEffect(() => {
        let ignore = false;
        if (!ignore)  Reviews()
        return () => { ignore = true; }
    },[]);


    return (
        
        <div className='full-cont2'>
            <h1>My Reviews</h1>
            {showPosts}
        </div> 
    );
}