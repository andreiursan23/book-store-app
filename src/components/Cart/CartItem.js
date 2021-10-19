import './CartItem.css';

const CartItem = (props) => {
  return (
    <li className="item">
      <header>
        <div className="price">
          <span className="itemprice"></span>
        </div>
      </header>
      <div className="details">
        <div className="quantity">
        </div>
        <div className="actions">
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
