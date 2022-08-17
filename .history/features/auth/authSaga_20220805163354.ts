import { authActions, LoginPayload } from './authSlice';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import * as api from '../../api-client/authApi'
import { useEffect } from "react";
// const takeLatest: any = Effects.takeLatest;
// const call: any = Effects.call;
// const put: any = Effects.put;
import cookie from 'cookie'
export interface ResponseGenerator{
    data?:any,
}
function* handleLogin(payload: LoginPayload) {
    try {
      const response:ResponseGenerator = yield call(api.login, payload)
      cookie.serialize('access_token', response.data.access_token)
      cookie.serialize('refreshtoken', response.data.refresh_token, {
        maxAge: 60 * 60 * 24 * 7,
      })
      yield put(authActions.loginSuccess(response.data.user));
    } catch (error:any) {
      yield put(authActions.loginFailed(error.response.data.err));
    }
  }
  function* handleLogout() {
    yield put(authActions.logout());

  }
function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = localStorage.getItem('access_token')
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
