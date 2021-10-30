import ProductsList from './ProductsList';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { fetchProductsByCategory } from '../../store/products/products-actions';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../UI/Spinner/Spinner';

const CategoryProducts = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.items);
    const showLoader = useSelector(state => state.loading.showLoading);

    useEffect(() => {
        console.log(params);
        dispatch(fetchProductsByCategory(params.category));
    }, [params.category]);

    if (showLoader) return <Spinner />

    return (
        <section className="products">
            <h2>Products from category: {params.category}</h2>
            <ProductsList
                products={products}
            />
        </section>
    );
};

export default CategoryProducts;
