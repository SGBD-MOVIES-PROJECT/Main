import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import { FilterMovies } from '../components/FilterMovies';
import { DemoCarousel } from '../components/DemoCarousel';
import SearchBar from "../components/SearchBar";

function Home() {
  const [name, setName] = useState('');
      
      const handleSubmit = (e) => {
      
          e.preventDefault();
  
          console.log(`Form submitted, ${name}`); 
      }
  return (

    <>
      {/* <div className='home'>
       <h1>Home </h1>
      </div> */}
      
      <div className='main'> 
      <SearchBar />
        <FilterMovies/>
       

            {/* <form onSubmit = {handleSubmit} className = 'boto' >
                <input onChange = {(e) => setName(e.target.value)} value = {name}></input> 
                <Link to = "./support">
                  <button type = 'submit'>Click to submit</button>
                </Link>
            </form> */}
        <div className='carousel'>
          <DemoCarousel /> 
        </div>
      </div>
    
    </>    
          
  );
      
}

export default Home;


