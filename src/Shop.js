import Header from './Header';
import Sidebar from './Sidebar';
import './styles/Shop.css'
import inventory from './inventory';
import Card from './Card';
import shopBg from './images/shopBg.jpg';

function ShopWindow() {
  let arr = [];
  for (let i = 0; i < inventory.length; i += 1) {
    let card = (
      <Card key={inventory[i].name} inventory={inventory[i]} />
    )
    arr.push(card)
  }
  return arr;
}

function Shop() {
  return (
    <div className='main-window'>
      <Header />
      <div className='shop-body' style={{backgroundImage: `url(${shopBg})`}}>
        <Sidebar />
        <div className='shop-cont'>
          <ShopWindow />
        </div>
      </div>
    </div>
  );
}

export default Shop;
