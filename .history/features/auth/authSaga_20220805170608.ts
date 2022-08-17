import { authActions, LoginPayload } from './authSlice';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import * as api from '../../api-client/authApi'
import { useEffect } from "react";
// const takeLatest: any = Effects.takeLatest;
// const call: any = Effects.call;
// const put: any = Effects.put;
import { getCookie, setCookie, removeCookie } from 'typescript-cookie'

export interface ResponseGenerator{
    data?:any,
}
function* handleLogin(payload: LoginPayload) {
    try {
      const response:ResponseGenerator = yield call(api.login, payload)
      // setCookie('access_token', response.data.access_token, { path: '' })
      // setCookie('refresh_token', response.data.access_token, { expires: 7, path: '' })
      yield put(authActions.loginSuccess(response.data.user));
    } catch (error:any) {
      yield put(authActions.loginFailed(error.response.data.err));
    }
  }
  function* handleLogout() {
    // removeCookie('access_token',{ path: '' })
    yield put(authActions.logout());

  }
function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = getCookie('access_token')
        if(isLoggedIn){
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
