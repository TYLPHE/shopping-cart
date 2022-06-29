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
  const [avian, setAvian] = useState(false);
  const [canine, setCanine] = useState(false);
  const [cost, setCost] = useState(null);


  function handleAvian() {
    setAvian(v => !v);
  }

  function handleCanine() {
    setCanine(v => !v);
  }

  function handleCost() {
    setCost(v => !v);
  }

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
    let arr = [];
    if (avian) {
      for (let i = 0; i < inv.length; i += 1) {
        if (inv[i].tribe === 'Avian') {
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
    } 
    if (canine) {
      for (let i = 0; i < inv.length; i += 1) {
        if (inv[i].tribe === 'Canine') {
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
    } 
    if (cost) {
      for (let i = 0; i < inv.length; i += 1) {
        if (inv[i].cost === 3) {
          console.log(inv[i].cost)
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
    } else {
      for (let i = 0; i < inv.length; i += 1) {
        if (!avian && !canine && !cost) {
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
          inv={inv} 
          setInv={setInv}
          avian={avian}
          handleAvian={handleAvian}
          canine={canine}
          handleCanine={handleCanine}
          cost={cost}
          handleCost={handleCost}
        />
        <div className='shop-cont'>
          <ShopWindow />
        </div>
      </div>
    </div>
  );
}

export default Shop;
