import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/auth";
// import { signUp, login }  from "../../shared/auth";

export const authSignUp = createAsyncThunk(
    "auth/signup",
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.signUp(data);
            return result;
        }
        catch ({ response }) {
            return rejectWithValue(response);
        }
    } 
);
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

export const current = createAsyncThunk(
    "auth/current",
    async (_, { rejectWithValue, getState }) => {
        try {
            const {auth}=getState()
            const data = await api.getCurrent(auth.token);
            return data;
         }
        catch ({ response }) {
            return rejectWithValue(response);
        }
    },
    {
        condition: (_, { getState }) => {
            const { auth } = getState();
            if (!auth.token) {
                return false;
            }
        }
    }
)
export const logout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            const data = await api.logout();
            return data;
         }
        catch ({ response }) {
            return rejectWithValue(response)
        }
    }
 )