import { cartActions } from "./cart-slice";

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