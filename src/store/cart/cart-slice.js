import { createSlice } from '@reduxjs/toolkit';
import { saveCart } from './cart-actions';

const initialState = {
    items: [],
    totalQty: 0,
    totalPrice: 0,
    cartIsVisible: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProduct(state, action) {
            const currentItem = action.payload;
            const itemExists = state.items.find(item => item.id === currentItem.id);

            state.totalPrice = state.totalPrice + Number(currentItem.price);
            state.totalQty++;

            if (!itemExists) {
                state.items.push({
                    id: currentItem.id,
                    title: currentItem.title,
                    price: currentItem.price,
                    qty: 1
                });
            } else {
                itemExists.qty = itemExists.qty + 1;
            }
            saveCart(state.items, state.totalPrice, state.totalQty);
        },
        removeProduct(state, action) {
            const currentItem = action.payload;
            const itemToBeChanged = state.items.find(item => item.id === currentItem.id);

            state.totalPrice = state.totalPrice - Number(currentItem.price);
            state.totalQty--;

            if (itemToBeChanged.qty === 1) {
                state.items = state.items.filter(item => item.id !== itemToBeChanged.id);
            } else {
                itemToBeChanged.qty--;
            }
            saveCart(state.items, state.totalPrice, state.totalQty);
        },
        loadSavedCart(state, action) {
            state.items = action.payload.items;
            state.totalQty = action.payload.totalQty;
            state.totalPrice = action.payload.totalPrice;
        },
        toggleCartIsVisible(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;