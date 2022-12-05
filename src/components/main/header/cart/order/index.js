import React, { useContext, useEffect, useRef } from "react";
import CartContext from "../../../CartContext";
import './style.css';

function Order (props) {
 console.log(props.show);
 const orderRef = useRef();
 const { cart, setCart } = useContext(CartContext);

 const classList = ["order-wrapper"];
 if (props.show) {
  classList.push('show');
 }

 useEffect(() => {
  if (props.show) {
   orderRef.current.classList.add('show');
  } else {
   orderRef.current.classList.remove('show');
  }
 }, [props.show]);

 const close = (event) => {
  props.close(event);
 };

 const removeProduct = (event, index) => {
  event.stopPropagation();
  setCart((prevState) => {

   return {
    ...prevState,
    products: prevState.products.filter((elem, i) => i !== index)
   };
  });
 };

 return (
  <div ref={orderRef} onClick={close} className={classList.join(' ')}>
   <div className="order">
    {
     cart.products.map((product, i) => {

      return (
       <div>
        {i + 1}:{product.title}
        <span onClick={(event) => removeProduct(event, i)}>remove item</span></div>
      );
     })
    }
   </div>
  </div>
 );
}

export default Order;