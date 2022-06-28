import './styles/Cart.css';
import inventory from './inventory';

function Cart({ cartBool, cart, rmCartItem }) {
  function Total() {
    let subtotal = 0;
    cart.forEach(obj => {
      inventory.forEach(inv => {
        if (obj.name === inv.name) {
          subtotal += inv.teeth * obj.qty;
        }
      });
    });

    return <span className='subtotal-value'>{subtotal}</span>;
  }

  function ToothCost({ cost }) {
    if (cost === 1) {
      return <>{cost} tooth</>
    } else {
      return <>{cost} teeth</>
    }
  }
  function List() {
    return cart.map(obj => {
      return (
        <div key={obj.id} className='cart-li'>
          <div className='cart-desc-cont'>
            <img className='cart-img' alt={`${obj.name}`} src={obj.img} />
            <div className='cart-desc'>
              <div>{obj.name}</div>
              <div>{<ToothCost  cost={obj.cost}/>}</div>
              <div className='in-stock'>In Stock</div>
            </div>
          </div>
          <div className='cart-qty-cont'>
            <span>Qty: {obj.qty}</span>
            <button onClick={() => rmCartItem(obj.id)}>remove</button>
          </div>
        </div>
      );
    });
  }

  function TotalCards() {
    let items = 0;
    for (let i = 0; i < cart.length; i += 1) {
      items += parseInt(cart[i].qty);
    }
    if (items === 1) {
      return <>{items} card</>
    } else {
      return <>{items} cards</>
    }
  }

  if (cartBool) {
    return (
      <div className='shopping-cart slide-in'>
        <div>
          <span>Subtotal </span>
          {/* <span className='subtotal-value'>{<Total />}</span> */}
          <Total />
          <span> teeth</span>
        </div>
        <button>Proceed to checkout ({<TotalCards />})</button>
        <List className='shopping-list'/>
      </div>
    );
  } else {
    return (
      <div className='shopping-cart slide-out'></div>
    );
  } 
}

export default Cart;
