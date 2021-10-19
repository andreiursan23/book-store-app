import Card from '../UI/Card';
import ConfirmModal from '../UI/ConfirmModal/ConfirmModal';
import './ProductItem.css';

const ProductItem = (props) => {
  return (
    <>
      <li className="item">
        <Card>
          <header>
            <div className="price"></div>
          </header>
          <div className="actions">
            <button>Add to Cart</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </Card>
      </li>
      <ConfirmModal 
        titleText="Confirm"
        cancelText="Cancel"
        confirmText="Confirm"
      />
    </>
  );
};

export default ProductItem;
