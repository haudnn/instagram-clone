import { authActions, LoginPayload } from './authSlice';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import cookie from 'cookie'
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
      console.log(payload)
      const response:ResponseGenerator = yield call(api.login, payload)
      console.log(response.data.access_token)
      if(typeof window !== 'undefined'){
        localStorage.setItem('access_token', response.data.access_token);
      }
    } catch (error) {
    }
  }
  function* handleLogout() {
    if(typeof window !== 'undefined'){
      localStorage.removeItem('access_token')
    }

  }
function* watchLoginFlow() {
    while (true) {
      if(typeof window !== 'undefined'){
        const isLoggedIn = Boolean(localStorage.getItem('access_token'));
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
