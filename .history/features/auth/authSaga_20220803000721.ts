import { RegisterPayLoad, authActions } from './authSlice';
import { takeLatest, call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import authApi from '../../api-client/authApi';

export interface ResponseGenerator{
    data?:any,
}
function* handleRegisterSaga(payload: PayloadAction) {
  try {
    const response:ResponseGenerator = yield call(authApi.register, payload.payload);
  } catch (error) {}
}

export default function* authSaga() {
  console.log('Auth Saga');
  yield takeLatest(authActions.register.type, handleRegisterSaga);
}
