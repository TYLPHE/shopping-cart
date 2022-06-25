import './styles/Cart.css';

function Cart({ cartBool, cart }) {
  function List() {
    return cart.map(obj => {
      return (
        <div key={`${obj.name}-${obj.qty}`}>
          <span>{obj.name} - </span>
          <span>Qty: {obj.qty}</span>
        </div>
      );
    });
  }


  if (cartBool) {
    return (
      <div className='shopping-cart slide-in'>
        <List />
      </div>
    );
  } else {
    return <div className='shopping-cart slide-out'>
      <List />
    </div>
  }
}

export default Cart;
