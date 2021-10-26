import './Products.css';
import ProductsList from './ProductsList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/products/products-actions';
import { useEffect } from 'react';

const Products = () => {

  const products = useSelector(state => state.products.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section className="products">
      <h2>Buy your favorite books</h2>
      <ProductsList products={products} />
    </section>
  );
};

export default Products;
