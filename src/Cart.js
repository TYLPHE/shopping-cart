import './styles/Cart.css';

function Cart({ cartBool }) {
  if (cartBool) {
    return (
      <div className='shopping-cart slide-in'>
        cart
      </div>
    );
  } else {
    return <div className='shopping-cart slide-out'>
      cart
    </div>
  }
}

export default Cart;
