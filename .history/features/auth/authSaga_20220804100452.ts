import { authActions, LoginPayload } from './authSlice';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import cookie from 'cookie'
// const takeLatest: any = Effects.takeLatest;
// const call: any = Effects.call;
// const put: any = Effects.put;

export interface ResponseGenerator{
    data?:any,
}
function* handleLogin(payload: LoginPayload) {
    try {

    } catch (error) {
    }
  }
  
  function* handleLogout() {
  
  }
function* watchLoginFlow() {
    while (true) {
      const isLoggedIn = Boolean(localStorage.getItem('access_token'));
      if (!isLoggedIn) {
        const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
        yield fork(handleLogin, action.payload);
      }
      yield take(authActions.logout.type);
      yield call(handleLogout);
    }
  }

export default function* authSaga() {
    yield fork(watchLoginFlow);
}
