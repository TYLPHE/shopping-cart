import { useState } from 'react';
import './styles/Card.css';

function Card({ inventory, handleCart }) {
  const [qty, setQty] = useState(1);

  function ToothCost({ teeth }) {
    if (teeth === 1) {
      return (
        <div className='price-tag'>
          <span>Cost: &nbsp;</span>
          <span className='price'>{teeth} </span>
          <span>&nbsp; tooth</span>
        </div>
      );
    } else {
      return (
        <div className='price-tag'>
          <span>Cost: &nbsp; </span>
          <span className='price'>{teeth}</span>
          <span>&nbsp; teeth</span>
        </div>
      );
    }
  }

  return (
    <div className='card'>
      <img alt='test' src={inventory.img} />
      <div className='card-details'>
        <div className='card-name'>{inventory.name}</div>
        <div>{inventory.desc}</div>
        <ToothCost teeth={inventory.teeth}/>
        <div className='in-stock'>In Stock</div>
        <div>
          <label htmlFor={`${inventory.name}`}>Qty: &nbsp;</label>
          <input
            type={'number'} 
            id={`${inventory.name}`} 
            value={qty}
            min={0} 
            onChange={e => setQty(e.target.value)}
          />
        </div>
        <button 
          type='submit' 
          onClick={() => {
            handleCart(
              qty, 
              inventory.name, 
              inventory.img, 
              inventory.cost
            )}
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;