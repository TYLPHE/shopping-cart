import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';
import Cart from './Cart';

function Header({ cart, rmCartItem }) {
  const [cartBool, setCartBool] = useState(false);

  return(
    <header>
      <Link className='header-title' to='/shopping-cart/'>
        <div className='logo'>Shopping Cart by TYLPHE</div>
      </Link>
      <div className='searchbar'>
        <input type={'text'} placeholder='Search'/>
        <span className="material-symbols-outlined">search</span>
      </div>
      <span 
        className="material-symbols-outlined"
        onClick={() => setCartBool(v => !v)}
      >
        shopping_cart
      </span>
      <Cart cartBool={cartBool} cart={cart} rmCartItem={rmCartItem}/>
    </header>
  )
}

export default Header;
