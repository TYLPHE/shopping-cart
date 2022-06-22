import { Link } from 'react-router-dom';
import './styles/Header.css';
function Header() {
  return(
    <header>
      <Link to='/shopping-cart/'>
        <div className='logo'>Shopping Cart by TYLPHE</div>
      </Link>
      <span className="material-symbols-outlined">shopping_cart</span>
    </header>
  )
}

export default Header;
