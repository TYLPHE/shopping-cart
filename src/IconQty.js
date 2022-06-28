function IconQty({ cart, setCartBool }) {
  let items = 0;
  for (let i = 0; i < cart.length; i += 1) {
    items += parseInt(cart[i].qty);
  }
  if (items === 0) {
    return null
  } else if (items > 99) {
    return <div className='icon-qty' onClick={() => setCartBool(v => !v)}>99+</div>
  } else {
    return <div className='icon-qty' onClick={() => setCartBool(v => !v)}>{items}</div>;
  }
}

export default IconQty
