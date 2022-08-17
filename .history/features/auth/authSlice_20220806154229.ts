import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { User } from '../../interfaces/user';
export interface LoginPayload {
  mail: string;
  password: string;
}
export interface AuthState {
  isLoggedIn: boolean;
  isLoading?: boolean;
  currentUser?: User;
  error?: string
}
const initialState: AuthState = {
  isLoggedIn: false,
  isLoading: false,
  currentUser: undefined,
  error: undefined
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>){
      state.isLoading = true
    },
    loginSuccess(state, action: PayloadAction<User>){
      state.isLoading = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;    
      state.error = undefined;
    },
    loginFailed(state, action: any){
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = action.payload
    },
    logout(state) {
        state.isLoggedIn = false;
        state.currentUser = undefined;
    }
  },
});
// const { actions, reducer } = authSlice;

// actions
export const authActions = authSlice.actions;
// selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn
export const selectIsLoading = (state: any) => state.auth.isLoading
export const selectError = (state: any) => state.auth.error
export const currentUser = (state: any) => state.auth.currentUser
// reducer
const authReducer = authSlice.reducer;
export default authReducer;


