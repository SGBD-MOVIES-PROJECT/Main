import React, { useState } from 'react';
import { FilterMovies } from '../components/FilterMovies';
import { DemoCarousel } from '../components/DemoCarousel';
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
export default Home;


