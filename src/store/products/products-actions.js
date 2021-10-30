import axios from 'axios';
import { productsActions } from './products-slice';
import { loadingActions } from '../loading/loading-slice';

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(loadingActions.changeLoading(true));

        axios.get('http://apps.loopevo.com/apis/shop/books.php')
            .then((response) => {
                dispatch(productsActions.loadProducts(response.data));
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                dispatch(loadingActions.changeLoading(false));
            })
    }
}

export const addProduct = (title, price, description, category, author) => {
    return (dispatch) => {
        axios.post('http://apps.loopevo.com/apis/shop/add-book.php', { title, price, description, category, author })
            .then((response) => {
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const editProduct = (title, price, description, category, author, id) => {
    return (dispatch) => {
        axios.post('http://apps.loopevo.com/apis/shop/edit-book.php', { title, price, description, category, author, id })
            .then((response) => {
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const deleteProduct = (id) => {
    return (dispatch) => {
        axios.post('http://apps.loopevo.com/apis/shop/delete-book.php', { id })
            .then((response) => {
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const searchProducts = (text) => {
    return (dispatch) => {
        axios.post('http://apps.loopevo.com/apis/shop/search.php', { search: text })
            .then((response) => {
                dispatch(productsActions.loadSearchProducts(response.data));
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const fetchCategories = () => {
    return (dispatch) => {
        axios.post('http://apps.loopevo.com/apis/shop/categories.php')
            .then((response) => {
                dispatch(productsActions.loadProductsCategory(response.data));
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const fetchProductsByCategory = (category) => {
    return (dispatch) => {
        dispatch(loadingActions.changeLoading(true));
        axios.post(`http://apps.loopevo.com/apis/shop/books-category.php/`, {category})
            .then((response) => {
                dispatch(productsActions.loadProducts(response.data));
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                dispatch(loadingActions.changeLoading(false));
            })
    }
}


// http://apps.loopevo.com/apis/shop/search.php { search }

// http://apps.loopevo.com/apis/shop/books-category.php