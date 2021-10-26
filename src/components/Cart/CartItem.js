import './CartItem.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart/cart-slice';

const CartItem = (props) => {
  const dispatch = useDispatch();

  return (
    <li className="item">
      <header>
        <h2>Title: {props.title}</h2>
        <div className="price">
          <span className="itemprice">Price: ${props.price}</span>
        </div>
      </header>
      <div className="details">
        <div className="quantity">
          Quantity: {props.qty}
        </div>
        <div className="actions">
          <button onClick={() => dispatch(cartActions.removeProduct({id: props.id, title: props.title, price: props.price}))}>-</button>
          <button onClick={() => dispatch(cartActions.addProduct({id: props.id, title: props.title, price: props.price}))}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
