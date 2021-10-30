import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showLoading: false
}

const loadingSlice = createSlice({
    name: 'loading',
    initialState: initialState,
    reducers: {
        changeLoading(state, action) {
            state.showLoading = action.payload;
        }
    }

});

export const loadingActions = loadingSlice.actions;
export default loadingSlice;