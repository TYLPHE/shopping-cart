import { Link } from 'react-router-dom';
import './styles/Homepage.css';
import long from './images/long.gif';

function Homepage() {
  return (
    <Link 
      to='/shopping-cart/shop'
      className='center home-body'
    >
      <div
        className='center home-body'
        style={{backgroundImage: `url(${long})`}}
      />
    </Link>  
  );
};

export default Homepage;
