import React, { useContext, useState } from "react";
import './style.css';
import cartFull from './imgs/shopping-cart-full.png';
import cartEmpty from './imgs/shopping-cart-empty.png';
import CartContext from "../../CartContext";
import Order from "./order";

function Cart () {
 const { cart } = useContext(CartContext);

 const [show, setShow] = useState(false);
 console.log('parent', show);
 const openCart = () => {
  setShow(true);
 };

 const closeCart = (event) => {
  event.stopPropagation();
  setShow(false);
 };

 return (
  <div className="cart" onClick={openCart}>
   <img src={cart.products.length ? cartFull : cartEmpty} alt='' />
   <div className="cart-counter">{cart.products.length}</div>
   <Order show={show} close={closeCart} />
  </div>
 );
}
export default Cart;