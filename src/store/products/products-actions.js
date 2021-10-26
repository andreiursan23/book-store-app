import axios from 'axios';
import { productsActions } from './products-slice';

export const fetchProducts = () => {
    return (dispatch) => {
        axios.get('http://apps.loopevo.com/apis/shop/books.php')
            .then((response) => {
                dispatch(productsActions.loadProducts(response.data));
            })
            .catch((error) => {
                console.log(error);
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