import './CartButton.css';

const CartButton = (props) => {
  return (
    <button 
      className="button"
    >
      <span>My Cart</span>
      <span className="badge"></span>
    </button>
  );
};

export default CartButton;
