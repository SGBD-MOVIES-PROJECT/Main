import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: 'TheAvengers.jpg',
  },
  {
    url: 'Joker.jpg',
  },
  {
    url: 'DrStrange.jpg',
  },
];

function DemoCarousel() {

    return (
    
      <div className="slide-container">
        <h2 className='popularnow'>MOST POPULAR NOW</h2>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`,'height':'400px'}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export {DemoCarousel} ;