import { RegisterPayLoad, authActions } from './authSlice';
import { takeLatest, call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {authApi} from '../../api/authApi'

function* handleRegisterSaga(payload: PayloadAction) {
    
}

export default function* authSaga() {
  console.log('Auth Saga');
  yield takeLatest(authActions.register.type, handleRegisterSaga);
}
