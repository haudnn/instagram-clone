import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
