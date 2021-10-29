import { cartActions } from "./cart-slice";
import axios from 'axios';

export const saveCart = (items, totalPrice, totalQty) => {
    localStorage.setItem("cart-items", JSON.stringify(items));
    localStorage.setItem("total-qty", totalQty);
    localStorage.setItem("cart-price", totalPrice);
}

export const getSavedCart = () => {
    return (dispatch) => {
        const items = localStorage.getItem("cart-items") ? JSON.parse(localStorage.getItem("cart-items")) : [];
        const totalQty = localStorage.getItem("total-qty") ? Number(localStorage.getItem("total-qty")) : 0;
        const totalPrice = localStorage.getItem("cart-price") ? Number(localStorage.getItem("cart-price")) : 0;
        

        dispatch(cartActions.loadSavedCart({items, totalQty, totalPrice}));
    }
}

export const sendOrder = (items) => {
    return (dispatch) => { 
        let order = '';
        items.forEach(item => {
            order += `id: ${item.id}, title: ${item.title}, quantity:${item.qty}; `
        })

        axios.post('http://apps.loopevo.com/apis/shop/save-order.php', { order })
             .then(() => {
                 localStorage.removeItem("cart-items");
                 localStorage.removeItem("total-qty");
                 localStorage.removeItem("cart-price");
                 dispatch(cartActions.emptyCart())
             })
        
        

        /*
            [
                { id: 1, title: 'title1', quantity},
                { id: 2, title, quantity}
            ]

            orderProducts = 'ID: 1, TITLE: title1, quantity: 2; ID: 2, TITLE: title2, quantity: 5;'

            http://apps.loopevo.com/apis/shop/save-order.php, { order: orderProducts}
        */

        
    }
}