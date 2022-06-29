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
  const [cartId, setCartID] = useState(0);
  const [inv, setInv] = useState(structuredClone(inventory));

  // states for filter
  const [tribe, setTribe] = useState('All');
  const [teeth, setTeeth] = useState('All');

  function handleCart(qty, name, img, cost, id) {
    if (qty > 0 || qty < 0) {
      for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
          const newCart = structuredClone(cart);
          newCart[i].qty += parseInt(qty);
          if (newCart[i].qty === 0) {
            return rmCartItem(id);
          } else {
            return setCart(newCart);
          }
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
    const filters = [tribe, teeth]
    let arr = [];
    const noAll = filters.filter(elem => elem !== 'All');

    console.log(noAll)

    for (let i = 0; i < inv.length; i += 1) {
      for (let i = 0; i < noAll.length; i += 1 ) {
      }
    }




      for (let i = 0; i < inv.length; i += 1) {
        if (inv[i].tribe === tribe) {
          let card = (
            <Card 
              key={inv[i].name} 
              inv={inv[i]}
              handleCart={handleCart}
              setCartBool={setCartBool}
            />
          )
          arr.push(card);
        } else if (noAll.length === 0) {
          let card = (
            <Card 
              key={inv[i].name} 
              inv={inv[i]}
              handleCart={handleCart}
              setCartBool={setCartBool}
            />
          )
          arr.push(card);
        }
      }
    return arr;
  }

  return (
    <div className='main-window'>
      <Header 
        cart={cart} 
        rmCartItem={rmCartItem} 
        cartBool={cartBool} 
        setCartBool={setCartBool}
        handleCart={handleCart}
        inv={inv}
      />
      <div className='shop-body' style={{backgroundImage: `url(${shopBg})`}}>
        <Sidebar 
          tribe={tribe}
          setTribe={setTribe}
          teeth={teeth}
          setTeeth={setTeeth}
        />
        <div className='shop-cont'>
          <ShopWindow />
        </div>
      </div>
    </div>
  );
}

export default Shop;
