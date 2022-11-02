import React from "react";
import './style.css';

function Card (props) {
 return (
  <div className='card'>
   <div className="card-image" style={{
    backgroundImage: `url(${props.image})`
   }}></div>
   <div className="card-title">{props.title}</div>
   <div className="card-description">{props.description}</div>
   <div className="card-date-section">
    {props.date} |

    {props.tag}
   </div>
  </div>
 );
}

export default Card;
