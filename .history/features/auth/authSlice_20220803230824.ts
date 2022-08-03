
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../interfaces/user';

export interface AuthState {
  isLoggedIn: boolean;
  isLoading?: boolean;
  currentUser?: User;
}
const initialState: AuthState = {
  isLoggedIn: false,
  isLoading: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

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
// reducer
const authReducer = authSlice.reducer;

export default authReducer;


