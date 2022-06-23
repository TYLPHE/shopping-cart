import Header from './Header';
import Sidebar from './Sidebar';
import './styles/Shop.css'
import inventory from './inventory';
import Card from './Card';

function ShopWindow() {
  let arr = [];
  for (let i = 0; i < inventory.length; i += 1) {
    let card = (
      <Card inventory={inventory[i]} />
    )
    arr.push(card)
  }
  return arr;
}

function Shop() {
  return (
    <div>
      <Header />
      <div className='shop-body'>
        <Sidebar />
        <div className='shop-cont'>
          <ShopWindow />
        </div>
      </div>
    </div>
  );
}

export default Shop;
