import './styles/Card.css';
function Card({ inventory }) {
  // console.log(inventory)
  return (
    <div className='card'>
      <img alt='test' src={inventory.img} />
      <div className='card-details'>
        <div className='card-name'>{inventory.name}</div>
        <div>{inventory.desc}</div>
        <div>Teeth/ea: {inventory.teeth}</div>
        <div>
          <label htmlFor={`${inventory.name}`}>Qty: &nbsp;</label>
          <input 
            type={'number'} 
            id={`${inventory.name}`} 
            pattern='[0-9]{1}'
            title='Limit 9'
            defaultValue={0} 
            min={0} 
            max={9} 
          />
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default Card;