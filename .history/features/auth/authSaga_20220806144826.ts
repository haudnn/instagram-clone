import { authActions, LoginPayload } from './authSlice';
import { call, fork, put, take } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import authAPI from '../../api-client/authApi'
import { getCookie, removeCookie } from 'typescript-cookie'
export interface ResponseGenerator{
    data?:any,
}
function* handleLogin(payload: LoginPayload) {
    try {
      const response:ResponseGenerator = yield call(authAPI.login, payload)
      yield put(authActions.loginSuccess(response.data.user))
    } catch (error:any) {
      yield put(authActions.loginFailed(error.response.data.err));
    }
  }
  function* handleLogout() {
    localStorage.removeItem("access_token")
    yield put(authActions.logout());
  }
function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = localStorage.getItem("access_token")
        if(!isLoggedIn){
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