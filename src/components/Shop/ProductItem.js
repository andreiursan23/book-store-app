import Card from '../UI/Card';
import ConfirmModal from '../UI/ConfirmModal/ConfirmModal';
import './ProductItem.css';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../store/products/products-actions';
import { useState } from 'react';
import { cartActions } from '../../store/cart/cart-slice';


const ProductItem = (props) => {
  const history = useHistory();
  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false);

  const deleteItem = () => {
    dispatch(deleteProduct(props.id));
  }

  const confirmDelete = () => {
    deleteItem();
    setShowModal(false);
    window.location.reload();
  }

  return (
    <>
      <li className="item">
        <Card>
          <header>
            <h3>{props.title}</h3>
            <div className="price">${props.price}</div>
          </header>
          <p>{props.description}</p>
          <div className="actions">
            <button onClick={() => dispatch(cartActions.addProduct({id: props.id, title: props.title, price: props.price}))}>Add to Cart</button>
            <button onClick={() => history.push(`/edit-product/${props.id}`)} >Edit</button>
            <button onClick={() => setShowModal(true)}>Delete</button>
          </div>
        </Card>
      </li>
      <ConfirmModal 
        show={showModal}
        titleText="Confirm"
        cancelText="Cancel"
        confirmText="Confirm"
        bodyText="Are you sure you want to delete this?"
        handleConfirm={confirmDelete}
        handleClose={() => setShowModal(false)}
      />
    </>
  );
};

export default ProductItem;
