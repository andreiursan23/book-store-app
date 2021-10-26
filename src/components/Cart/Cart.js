import Card from '../UI/Card';
import './Cart.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const currentItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const totalQty = useSelector(state => state.cart.totalQty);

  if (currentItems.length === 0) return <></>

  return (
    <Card className="cart">
      <h2>Your Shopping Cart</h2>
      <ul>
        {currentItems.map(item => (
          <CartItem 
            title={item.title}
            key={item.id}
            id={item.id}
            price={item.price}
            qty={item.qty}
          />
        ))}
      </ul>
      <h3>Total Quantity: {totalQty}</h3>
      <h3>Total Price: {totalPrice}</h3>
      <button>Order</button>
    </Card>
  );
};

export default Cart;
