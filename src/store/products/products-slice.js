import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    searchItems:[]
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
        }
    }
});

export const productsActions = productsSlice.actions;
export default productsSlice;