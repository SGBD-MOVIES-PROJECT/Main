import React from "react";
import Masony from "react-masonry-component";
import "./Gallery.css";
import aboutImg from './avatar.jpg';
import aboutImg2 from './Joker2.jpg';
import aboutImg3 from './padrino.jpg';
import aboutImg4 from './maverick.jpg';
import aboutImg5 from './fabelsmans.jpg';
import aboutImg6 from './uncharted.jpg';
import aboutImg7 from './mundo.jpg';
import aboutImg8 from './batman.jpg';
import aboutImg9 from './nope.jpg';
import aboutImg10 from './woman.jpg';
import aboutImg11 from './aftersun.jpg';
import aboutImg12 from './adam.jpg';
import aboutImg13 from './alcarras.jpg';
import aboutImg14 from './blonde.jpg';
import aboutImg15 from './guerra.jpg';
import aboutImg16 from './thor.jpg';
import aboutImg17 from './worry.jpg';
import aboutImg18 from './hilo.jpg';
import aboutImg19 from './eo.jpg';
import aboutImg20 from './leo.jpg';

// Dome dummy content
const PHOTOS = [
    {
        imageUrl:
          aboutImg,
      },
      {
        imageUrl:
            aboutImg2,
      },
      {
        imageUrl:
            aboutImg3,
      },
      {
        imageUrl:
        aboutImg4,
      },
      {
        imageUrl:
        aboutImg5,
      },
      {
        imageUrl:
          aboutImg6,
      },
      {
        imageUrl:
            aboutImg7,
      },
      {
        imageUrl:
            aboutImg8,
      },
      {
        imageUrl:
          aboutImg9,
      },
      {
        imageUrl:
            aboutImg10,
      },
      {
        imageUrl:
            aboutImg11,
      },
      {
        imageUrl:
          aboutImg12,
      },
      {
        imageUrl:
            aboutImg13,
      },
        {
        imageUrl:
            aboutImg14,
        },
        {
        imageUrl:
            aboutImg15,
        },
        {   
        imageUrl:
            aboutImg16,
        },
        {
        imageUrl:
            aboutImg17,
        },
        {
        imageUrl:
            aboutImg18,
        },
        {
        imageUrl:
            aboutImg19,
        },
        {
        imageUrl:
            aboutImg20,
        },

];
 
// Masory Options
const masonryOptions = {
  fitWidth: false,
  columnWidth: 300,
  gutter: 30,
  itemSelector: ".photo-item",
};
 
const App = () => {
  return (
    <div className="fondo"> <h1 className="heder">Gallery Films</h1>
    <h1 className="heder2">________________________</h1>
      <Masony
        className={"photo-list"}
        elementType={"ul"}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {PHOTOS.map((photo) => (
          <li className={`photo-item`}>
            <img classname = "photo" src={photo.imageUrl} alt="" />
          </li>
        ))}
      </Masony>
    </div>
  );
};
 
export default App;