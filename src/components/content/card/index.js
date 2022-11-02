import React from "react";
import './style.css';

function Card (props) {
 const classNames = [
  'card'
 ];
 console.log(props.isVisible);
 // if (props.isVisible == false) {
 if (!props.isVisible) {
  classNames.push('hide');
 }
 return (
  <div className={classNames.join(' ')}>
   <div className="card-image" style={{
    backgroundImage: `url(${props.image})`
   }}></div>
   <div className="card-title">{props.title}</div>
   <div className="card-description">{props.description}</div>
   <div className="card-date-section">
    {props.date} |
    <span
     onClick={() => props.setTag(props.tag)}
    >
     {props.tag}
    </span>


   </div>
  </div>
 );
}

export default Card;
