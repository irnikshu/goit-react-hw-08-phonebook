import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/auth";
// import signUp from "../../shared/auth";

export const authSignUp = createAsyncThunk(
    "auth/signup",
    async (data, { rejectWithValue }) => {
        try { 
            const { data: result } = await api.signUp(data);
            return result;
        }
        catch ({ response }) {
            return rejectWithValue(response);
        }
    }
)
export const login = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try { 
            const { data: result } = await api.login(data);
            return result;
        }
        catch ({ response }) {
            return rejectWithValue(response);
        }
    }
)