import React, { useEffect, useState } from "react";
import './style.css';
import { useNavigate } from 'react-router-dom';
import Header from "./header";
import Products from "./products";
import CartContext from "./CartContext";

function MainPage () {

 const navigate = useNavigate();

 const [cart, setCart] = useState({
  products: [],
 });

 useEffect(() => {
  const token = localStorage.getItem('token');
  if (!token) {
   navigate('/login');
  }
 }, []);
 return (
  <div className="full-screen bg-main">
   <CartContext.Provider value={{ cart, setCart }}>
    <Header />
    This is main page
    <Products />
   </CartContext.Provider>
  </div>
 );
}

export default MainPage;