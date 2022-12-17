import React, { useState } from "react";
import './styles/CreateReview.css';


export default function UserProfile() {
    let url = 'https://www.example.com/api/create-item';
    const [showPosts, setshowPosts] = useState();
    let displayData
    const handleClick = event => {
        pullJson();
    };
    
    function pullJson(){
        console.log("before fetch");
        console.log("hola");
        console.log(url);
        fetch(url)
        .then(response => response.json() )
        .then(responseData => {
            displayData = function(){
                let tbodyData=responseData; 
          
            
            console.log(tbodyData);
            return(
                
                // <div>
                //   <Table>
                //     loading: {loading}
                //     columns: {columns}
                //     dataSource: {dataSource}
                //     pagination: {{
                //         pageSize: pageSize,
                //         current: page,
                //         onChange: (page, pageSize) => {
                //             setPageSize(pageSize);
                //             setPage(page);
                //         }
                //     }}
                // </Table>  
                    
                
                // </div>
                
                <table>
                <thead>
                    <tr>
                        {/* <td>Id</td> */}
                        <td>Original title</td>
                        <td>Original language</td>
                        <td>Release date</td>
                        <td>Budget</td>
                    </tr>
                </thead>
                <tbody>
                    {   tbodyData.map(todo => (
                    <tr>
                        {/* <th>{todo.id}</th> */}
                        <th>{todo.original_title}</th>
                        <th>{todo.original_language}</th>
                        <th>{todo.release_date}</th>
                        <th>{todo.budget}</th>
                    </tr>
                    ))}
                </tbody>
            </table>
             )
        }
            setshowPosts(displayData)
        })
             
     }
    return (
            <div className='full-cont'>
                <h1>My Reviews</h1>
                <div className = 'submit-button-div'>
                    <button onClick={handleClick} className='submit-button' type = 'submit'>SHOW REVIEWS</button>
                    {showPosts}
                </div>
            </div> 
            
            
       
    );
}