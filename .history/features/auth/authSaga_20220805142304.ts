import { authActions, LoginPayload } from './authSlice';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie'
import * as api from '../../api-client/authApi'
import { useEffect } from "react";
// const takeLatest: any = Effects.takeLatest;
// const call: any = Effects.call;
// const put: any = Effects.put;

export interface ResponseGenerator{
    data?:any,
}
function* handleLogin(payload: LoginPayload) {
    try {
      const response:ResponseGenerator = yield call(api.login, payload)
      localStorage.setItem('access_token', response.data.access_token)
      // Cookie.set('access_token',response.data.access_token)
      Cookies.set('refreshtoken', response.data.refresh_token, {
        path: 'api/auth/accessToken',
        expires: 7
      })
      yield put(authActions.loginSuccess(response.data.user));
    } catch (error:any) {
      yield put(authActions.loginFailed(error.response.data.err));
    }
  }
  function* handleLogout() {
    Cookies.remove('access_token')
    yield put(authActions.logout());

  }
function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = Cookies.get('access_token')
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

// Cookie.set('refreshtoken', res.refresh_token, {
//   path: 'api/auth/accessToken',
//   expires: 7
// })
