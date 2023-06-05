import React, {useState} from 'react';
import {useEffect} from 'react';
import "../styles/Cart.css";

const Cart = ({cart, setCart, handleChange}) => {
  const [price, setPrice] = useState(0);
  const handleRemove = (id) => {
    const arr = cart.filter((el) => el.id !== id);
    setCart(arr);
    handlePrice();
  }

  const handlePrice = () => {
    let total = 0;
    cart.map((el) => (total += el.amount * el.price))
    setPrice(total);
  }


  useEffect(() => {
    handlePrice();
  })

  return (
    <article>
      {
        cart.map((el) => (
          <div className="cart_box" key={el.id}>
            <div className="cart_img">
              <img alt='img' src={el.img}/>
              <p>{el.title}</p>
            </div>
            <div>
              <button onClick={() => handleChange(el, 1)}> +</button>
              <button>{el.amount}</button>
              <button onClick={() => handleChange(el, -1)}> -</button>
            </div>
            <div>
              <span>{el.price}</span>
              <button onClick={() => handleRemove(el.id)}>Remove</button>
            </div>
          </div>
        ))}
      <div className='total'>
        <h2>Total </h2>
        <h2>$ {price}</h2>
      </div>
    </article>
  )
}

export default Cart
