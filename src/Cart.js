import './styles/Cart.css';
import inventory from './inventory';

function Cart({ cartBool, cart, rmCartItem, handleCart }) {
  function Total() {
    let subtotal = 0;
    cart.forEach(obj => {
      inventory.forEach(item => {
        if (obj.name === item.name) {
          subtotal += item.teeth * obj.qty;
        }
      });
    });

    return <span className='subtotal-value'>{subtotal}</span>;
  }

  function ToothCost({ teeth }) {
    console.log(teeth)
    if (teeth === 1) {
      return <>{teeth} tooth</>
    } else {
      return <>{teeth} teeth</>
    }
  }

  function UpdateQty({ obj }) {
    return (
      <div className='update-qty'>
        <button 
          className='inc-dec-button'
          onClick={
            () => handleCart(-1, obj.name, obj.img, obj.cost, obj.id)}
          >
            -
          </button>
        <div className='cart-qty'>{obj.qty}</div>
        <button 
          className='inc-dec-button'
          onClick={
            () => handleCart(1, obj.name, obj.img, obj.cost, obj.id)}
          >
            +
          </button>
      </div>
    )
  }

  function List() {
    return cart.map(obj => {
      console.log(obj)
      return (
        <div key={obj.id} className='cart-li'>
          <div className='cart-desc-cont'>
            <img className='cart-img' alt={`${obj.name}`} src={obj.img} />
            <div className='cart-desc'>
              <div>{obj.name}</div>
              <div>{<ToothCost teeth={obj.teeth}/>}</div>
              <div className='in-stock'>In Stock</div>
            </div>
          </div>
          <div className='cart-qty-cont'>
            <UpdateQty obj={obj}/>
            <button 
              className='rm-button' 
              onClick={() => rmCartItem(obj.id)}
            >
              remove
            </button>
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
      <div className='shopping-cart slide-in' data-testid='cart'>
        <div>
          <span>Subtotal </span>
          <Total />
          <span> teeth</span>
        </div>
        <a 
          className='checkout-link' 
          href='https://github.com/tylphe/shopping-cart' 
          target='_blank' 
          rel='noreferrer'
        >
          <button className='checkout' data-testid='checkout'>
            Proceed to checkout ({<TotalCards />})
          </button>
        </a>
        <List className='shopping-list'/>
      </div>
    );
  } else {
    return (
      <div className='shopping-cart slide-out' data-testid='cart'></div>
    );
  } 
}

export default Cart;
