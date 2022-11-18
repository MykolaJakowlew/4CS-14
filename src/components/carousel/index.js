import React from "react";
import './style.css';
// https://www.npmjs.com/package/react-material-ui-carousel
import Carousel from 'react-material-ui-carousel';

const colors = [
 'red', 'blue', 'orange', 'pink'
];

function MyCarousel () {

 return (
  <div>
   <Carousel height={'500px'}>
    {colors.map(color => <div
     style={{ width: '100%', height: '100%', backgroundColor: color }}></div>)}
   </Carousel>
  </div>
 );
}

export default MyCarousel;