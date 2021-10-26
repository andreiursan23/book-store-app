import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        loadProducts(state, action) {
            state.items = action.payload;
        }
    }
});

export const productsActions = productsSlice.actions;
export default productsSlice;