import { authActions, LoginPayload } from './authSlice';
import { call, fork, put, take,takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import authAPI from '../../api-client/authApi'

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
    yield put(authActions.logout());
  }
export default function* authSaga() {
    // const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
    // yield call(handleLogin, action.payload);
    yield takeLatest(authActions.login.type, handleLogin)
    yield takeLatest(authActions.logout.type, handleLogout)
}
