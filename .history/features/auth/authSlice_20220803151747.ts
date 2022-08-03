
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../interfaces/user';

export interface RegisterPayLoad {
  mail: string;
  username: string;
  fullname: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  isLoading?: boolean;
  error?: string;
  message?: string;
  currentUser?: User;
}
const initialState: AuthState = {
  isLoggedIn: false,
  isLoading: false,
  error: undefined,
  message: undefined,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register(state, action: PayloadAction<RegisterPayLoad>) {
      state.isLoading = true;
    },
    registerSuccess(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.message = action.payload;
    },
    registerFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
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
export const selectIsLogging = (state: any) => state.auth.logging

// reducer
const authReducer = authSlice.reducer;

export default authReducer;


