import './Products.css';
import ProductsList from './ProductsList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/products/products-actions';
import { useEffect } from 'react';
import Spinner from '../UI/Spinner/Spinner';

const Products = () => {
  const products = useSelector(state => state.products.items);
  const dispatch = useDispatch();
  const showLoading = useSelector(state => state.loading.showLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (showLoading) return <Spinner />

  return (
    <section className="products">
      <h2>Buy your favorite books</h2>
      <ProductsList products={products} />
    </section>
  );
};

export default Products;
