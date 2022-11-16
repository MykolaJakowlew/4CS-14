import React from "react";
import './style.css';
import MenuItem from "./menu-item";

const menuData = [
 { title: 'homepage' },
 {
  title: "pages",
  items: [
   { title: "page 1" },
   { title: "page 2" },
   { title: "page 3" },
   { title: "page 4" },
  ],
 },
 { title: "page 3 top" },
 {
  title: "page 4 top",
  items: [
   { title: "page A" },
   { title: "page B" },
   { title: "page C" },
   { title: "page D" },
  ],
 },
];

function Menu () {

 return (
  <header>
   {menuData.map(elem => <MenuItem title={elem.title} items={elem.items} />)}
  </header>
 );
}

export default Menu;