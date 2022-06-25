import { useState } from 'react';
import './styles/Card.css';

function Card({ inventory, handleCart }) {
  const [qty, setQty] = useState(0);

  return (
    <div className='card'>
      <img alt='test' src={inventory.img} />
      <div className='card-details'>
        <div className='card-name'>{inventory.name}</div>
        <div>{inventory.desc}</div>
        <div className='price-tag'>
          <span>Teeth: &nbsp; </span>
          <span className='price'>{inventory.teeth}</span>
        </div>
        <div>
          <label htmlFor={`${inventory.name}`}>Qty: &nbsp;</label>
          <input
            type={'number'} 
            id={`${inventory.name}`} 
            pattern='[0-9]{1}'
            title='Limit 9'
            value={qty}
            min={0} 
            max={9}
            onChange={e => setQty(e.target.value)}
          />
        </div>
        <button type='submit' onClick={() => handleCart(qty, inventory.name)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;