import React, { useEffect } from "react";
import { useState, useContext } from "react";
import axios from "axios";
import './styles/CreateReview.css';
import tokenService from "../api/tokenService"; 

const baseUrl="http://127.0.0.1:8000/api/";

export default function ReviewsProfile() {
    var bodyFormData = new FormData();
    let displayData;
    const [showPosts, setshowPosts] = useState();

    function Reviews() {
        axios.get(baseUrl+"showReviews/" ,{
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + tokenService.getLocalAccessToken().replace(/['"]+/g, '')
            }, data: bodyFormData
        }).then(response => {
            displayData = function(){
            let tbodyData=response; 
            console.log(tbodyData);
            return(
                <table>
                <tbody>
                    {   tbodyData.data.map(todo => (
                    <tr>
                        {/* <th>{todo.id}</th> */}
                        <th><a>{todo.titleReview}</a></th>
                        <th><p>{todo.nota}</p></th>
                        <th><p>{todo.review}</p></th>
                    </tr>
                    ))}
                </tbody>
            </table>
             )
            }
            setshowPosts(displayData);
        }         
        
            
    )}
             
     

    useEffect(() => {},
    Reviews(),
    []);


    return (
        
        <div className='full-cont2'>
            <h1>My Reviews</h1>
            {showPosts}
        </div> 
    );
}