import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    searchItems: [],
    productsCategory: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        loadProducts(state, action) {
            state.items = action.payload;
        },
        loadSearchProducts(state, action){
            state.searchItems = action.payload;
        },
        loadProductsCategory(state, action){
            state.productsCategory = action.payload;
        },
    }
});

export const productsActions = productsSlice.actions;
export default productsSlice;