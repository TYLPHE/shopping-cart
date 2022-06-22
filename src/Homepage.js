import { Link } from 'react-router-dom';
import './styles/Homepage.css';
function Homepage() {
  return (
    <div className='center flex-dir-col home-body'>
      Welcome to Shopping Cart
      <div>
        <Link to='/shopping-cart/shop'>
          <button className='enter-button'>Enter</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
