
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces/user";

export interface AuthState { 
    isLoggedIn: boolean;
    isLoading?: boolean;
    error?: string;
    currentUser?:User
}
const initialState: AuthState = {
    isLoggedIn: false,
    isLoading: false,
    error: undefined,
    currentUser:undefined
}

const authSlice = createSlice({
    name:'auth',
    initialState:'',
    reducers:{
        register(state,action:PayloadAction<string>){},
        registerSuccess(state,action:PayloadAction<string>){},
        registerFailed(state,action:PayloadAction<string>){},
    }
})
// const { actions, reducer } = authSlice;
// actions
export const authActions = authSlice.actions
// selectors
// reducer
const authReducer = authSlice.reducer

export default authReducer
