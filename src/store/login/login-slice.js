import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: null,
    token: null
}

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        loadUser(state, action) {
            state.username = action.payload.username;
            state.token = action.payload.token;
            localStorage.setItem('username', action.payload.username);
            localStorage.setItem('token', action.payload.token);
        },
        logout(state, action) {
            state.username = null
            state.token = null
            localStorage.removeItem('username');
            localStorage.removeItem('token');
        }
    }
});

export const loginActions = loginSlice.actions;
export default loginSlice;