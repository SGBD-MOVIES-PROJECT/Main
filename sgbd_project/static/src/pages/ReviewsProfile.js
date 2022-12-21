import React, { useEffect } from "react";
import { useState, useContext } from "react";
import axios from "axios";
import './styles/ReviewsProfile.css';
import * as AiIcons from 'react-icons/ai';
import tokenService from "../api/tokenService"; 

const baseUrl="http://127.0.0.1:8000/api/";
export default function ReviewsProfile() {
    var bodyFormData = new FormData();
    var bodyFormData2 = new FormData();
    let displayData;
    const [showPosts, setshowPosts] = useState();
    const style = { color: "yellow", fontSize: "35px", marginBottom: "30px", faBorderColor: "blue" };
  
    
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
                                <a>{todo.titleMovie}</a>
                               
                            </div>

                            <div className="r2">
                                <a>{todo.nota} <AiIcons.AiFillStar style={style}/></a>
                               
                            </div>
                            <div className="r3">
                                <h2 className="titol-review-container">{todo.titleReview}</h2>
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
            <h1 className="my-reviews">My Reviews</h1>
            {showPosts}
        </div> 
    );
}