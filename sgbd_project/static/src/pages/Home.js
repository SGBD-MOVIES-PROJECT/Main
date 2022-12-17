import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import { FilterMovies } from '../components/FilterMovies';
import { DemoCarousel } from '../components/DemoCarousel';
import DisplayJson  from '../components/DisplayJson';
import data from "../data.json"

function Home() {
  const [name, setName] = useState('');
  const getHeadings = () => {
    return Object.keys(data[0]);
  }
  const handleSubmit = (e) => {
  
      e.preventDefault();

      console.log(`Form submitted, ${name}`); 
  }
  return (

    <>
      <div className='main'>
        <FilterMovies/>
        <div className='carousel'>
          <DemoCarousel /> 
        </div>
      </div>
    </>          
  );
      
}
{/* <form onSubmit = {handleSubmit} className = 'boto' >
                <input onChange = {(e) => setName(e.target.value)} value = {name}></input> 
                <Link to = "./support">
                  <button type = 'submit'>Click to submit</button>
                </Link>
            </form> */}
export default Home;


