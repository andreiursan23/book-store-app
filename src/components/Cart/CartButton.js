import './CartButton.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart/cart-slice';

const CartButton = (props) => {
  const dispatch = useDispatch()

  return (
    <button 
      className="button"
      onClick={() => dispatch(cartActions.toggleCartIsVisible())}
    >
      <span>My Cart</span>
      <span className="badge"></span>
    </button>
  );
};

export default CartButton;