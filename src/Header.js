import { Link } from 'react-router-dom';
import './styles/Header.css';
import Cart from './Cart';
import IconQty from './IconQty';

function Header(
  { 
    cart, 
    rmCartItem, 
    cartBool, 
    setCartBool, 
    handleCart, 
    setSearch
  }
) {
  return(
    <header>
      <Link className='header-title' to='/shopping-cart/'>
        <div className='logo'>Shopping Cart by TYLPHE</div>
      </Link>
      <div className='searchbar'>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type={'text'} 
          placeholder='Search'
        />
        <span className="material-symbols-outlined">search</span>
      </div>
      <span 
        className="material-symbols-outlined" 
        onClick={() => setCartBool(v => !v)}
      >
        shopping_cart
      </span>
      <Cart 
        data-testid='cart'
        cartBool={cartBool} 
        cart={cart} 
        rmCartItem={rmCartItem}
        handleCart={handleCart}  
      />
      <IconQty cart={cart} setCartBool={setCartBool}/>
    </header>
  )
}

export default Header;
