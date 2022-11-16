import React, { useState } from "react";
import './style.css';

function MenuItem (props) {
 const [show, setShow] = useState(false);

 const onMouseEnter = () => {
  console.log(`onMouseEnter:${props.title}`);
  setShow(true);
 };

 const onMouseLeave = () => {
  console.log(`onMouseLeave:${props.title}`);
  setShow(false);
 };

 let classList = 'sub-menu';
 if (show) {
  classList += ' show';
 }

 return (
  <div className="menu-item">
   <span
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
   >{props.title}</span>
   {
    props.items &&
    <div className={classList}>
     {props.items.map(item => <div>{item.title}</div>)}
    </div>
   }
  </div>
 );
}

export default MenuItem;