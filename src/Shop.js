import Header from './Header';
import Sidebar from './Sidebar';
import './styles/Shop.css'
import inventory from './inventory';
import Card from './Card';
import shopBg from './images/shopBg.jpg';
import { useState } from 'react';

function Shop() {
  const [cart, setCart] = useState([]);

  function handleCart(qty, name) {
    if (qty > 0) {
      const obj = {}
      obj.name = name;
      obj.qty = qty;
      obj.id = cart.length;
      setCart(prev => [...prev, obj]);
    }
  }

  function rmCartItem(index) {
    const newCart = cart;
    newCart.splice(index, 1);
    setCart(newCart); 
    console.log(cart);
  }

  function ShopWindow() {
    let arr = [];
    for (let i = 0; i < inventory.length; i += 1) {
      let card = (
        <Card 
          key={inventory[i].name} 
          inventory={inventory[i]}
          handleCart={handleCart}
        />
      )
      arr.push(card)
    }
    return arr;
  }

  return (
    <div className='main-window'>
      <Header cart={cart} rmCartItem={rmCartItem}/>
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
