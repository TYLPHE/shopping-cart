import './styles/Card.css';
function Card({ inventory }) {
  // console.log(inventory)
  return (
    <div className='card'>
      <img alt='test' src={inventory.img} />
      <div className='card-details'>
        <div>{inventory.name}</div>
        <div>{inventory.desc}</div>
        <div>Teeth/ea: {inventory.teeth}</div>
        <div>
          <label htmlFor='qty'>Qty: &nbsp;</label>
          <input type={'number'} id='qty' defaultValue={0} min={0} max={9} />
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default Card;