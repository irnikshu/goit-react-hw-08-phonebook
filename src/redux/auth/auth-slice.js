import { createSlice } from "@reduxjs/toolkit";
import { authSignUp, login } from "./auth-operation";

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder.addCase(authSignUp.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(authSignUp.fulfilled, (state, { payload }) => {
                const { user, token } = payload;
                state.loading = false;
                state.user = user;
                state.token = token;
                state.isLogin = true;
            })
            .addCase(authSignUp.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(login.fulfilled, (state, { payload }) => {
                const { user, token } = payload;
                state.loading = false;
                state.user = user;
                state.token = token;
                state.isLogin = true;
            })
            .addCase(login.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
        } )
    }
})
export default authSlice.reducer;