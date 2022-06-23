import { Link } from 'react-router-dom';
import './styles/Homepage.css';
import gif from './images/homepage.gif';
import jpg from './images/inscryption.jpg'
import { useEffect, useState } from 'react';

function Homepage() {
  const [bg, setBg] = useState(gif);
  useEffect(() => {
    const timer = setTimeout(() => setBg(jpg), 2050);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Link 
      to='/shopping-cart/shop'
      className='center home-body'
    >
      <div
        className='center home-body'
        style={{backgroundImage: `url(${bg})`}}
      />
    </Link>  
  );
};

export default Homepage;
