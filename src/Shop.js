import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import './styles/Shop.css'
// import inventory from './inventory';
import kingfisher from './images/kingfisher.png';
function Shop() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

  // useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res=>res.json())
    // .then(res=>setItems(res))
  //   fetch('https://pokeapi.co/api/v2/item/1/')
  //     .then(res => res.json())
  //     .then(res => setItems(res))
  // }, [])

  // const arr = Object.entries(inventory);
  // console.log(arr);

  return (
    <div>
      <Header />
      <div className='shop-body'>
        <Sidebar />
        <div className='shop-window'>{console.log(items)}</div>
        {/* <img alt='test' src={kingfisher}></img> */}
      </div>
    </div>
  );
}

export default Shop;
