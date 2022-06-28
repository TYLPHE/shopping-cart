import Header from './Header';
import Sidebar from './Sidebar';
import './styles/Shop.css'
import inventory from './inventory';
import Card from './Card';
import shopBg from './images/shopBg.jpg';
import { useState } from 'react';

function Shop() {
  const [cart, setCart] = useState([]);
  const [cartBool, setCartBool] = useState(false);
  const [cartId, setCartID] = useState(0)

  function handleCart(qty, name, img, cost) {
    if (qty > 0) {
      for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
          const newCart = structuredClone(cart);
          newCart[i].qty += parseInt(qty);
          return setCart(newCart);
        }
      }
      const obj = {}
      obj.name = name;
      obj.qty = parseInt(qty);
      obj.img = img;
      obj.cost = cost;
      obj.id = cartId;
      setCartID(x => x + 1);
      setCart(prev => [...prev, obj]);
    }
  }

  function rmCartItem(id) {
    for (let i = 0; i < cart.length; i += 1) {
      if (cart[i].id === id) {
        const newCart = structuredClone(cart);
        newCart.splice(i, 1);
        setCart(newCart); 
      }
    }
  }

  function ShopWindow() {
    let arr = [];
    for (let i = 0; i < inventory.length; i += 1) {
      let card = (
        <Card 
          key={inventory[i].name} 
          inventory={inventory[i]}
          handleCart={handleCart}
          setCartBool={setCartBool}
        />
      )
      arr.push(card)
    }
    return arr;
  }

  return (
    <div className='main-window'>
      <Header cart={cart} rmCartItem={rmCartItem} cartBool={cartBool} setCartBool={setCartBool}/>
      <div className='shop-body' style={{backgroundImage: `url(${shopBg})`}}>
        <Sidebar />
        <div className='shop-cont'>
          <ShopWindow />
        </div>
      </div>
    </div>
  );
}

export default Shop;
