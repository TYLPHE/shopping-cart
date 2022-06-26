import './styles/Cart.css';
import inventory from './inventory';
import { useState } from 'react';

function Cart({ cartBool, cart, rmCartItem }) {
  function Total() {
    let subtotal = 0;
    cart.forEach(obj => {
      inventory.forEach(inv => {
        if (obj.name === inv.name) {
          subtotal += inv.teeth * obj.qty
        }
      });
    });
    return subtotal;
  }

  function List() {
    return cart.map(obj => {
      return (
        <div key={obj.id} className='cart-li'>
          <span>{obj.qty}x {obj.name}</span>
          <button onClick={() => rmCartItem(obj.id)}>remove</button>
        </div>
      );
    });
  }

  if (cartBool) {
    return (
      <div className='shopping-cart slide-in'>
        <div className='center'>Cart</div>
        <List className='shopping-list'/>
        <span>Subtotal: {Total()} teeth</span> 
      </div>
    );
  } else {
    return (
      <div className='shopping-cart slide-out'></div>
    );
  } 
}

export default Cart;
