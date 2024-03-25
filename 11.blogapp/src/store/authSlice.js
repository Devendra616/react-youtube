import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false, //user is not authenticated 
    userData: null //no data available
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {
        login: (state, action) => {
            state.status = true,
            state.userData = action.payload.userData
        },
        logout:(state) => {
            // when logout, reset the state to initial state
            state.status=false,
            state.userData = null
        }

    }
})

export const { login,logout } = authSlice.actions;
export default authSlice.reducer;