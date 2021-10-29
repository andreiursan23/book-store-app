import'./Products.css';
import ProductsList from './ProductsList';
import { useSelector } from 'react-redux'

const SearchResults = () => {

    const searchedProducts = useSelector(state => state.products.searchItems)

    return (
        <section className="products">
            <ProductsList products = {searchedProducts} />
        </section>
    );
};

export default SearchResults;