import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cart-slice';
import productsSlice from './products/products-slice'
import loginSlice from './login/login-slice';

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
        login: loginSlice.reducer
    }

});

export default store;