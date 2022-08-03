import { RegisterPayLoad, authActions } from './authSlice';
import * as Effects from "redux-saga/effects";
import { PayloadAction } from '@reduxjs/toolkit';
import { register } from '../../api-client/authApi';

const takeLatest: any = Effects.takeLatest;
const call: any = Effects.call;
const put: any = Effects.put;
export interface ResponseGenerator{
    data?:any,
}

function* handleRegisterSaga(payload: PayloadAction) {
  try {
    const response:ResponseGenerator = yield call(register, payload.payload);
    yield put(authActions.registerSuccess(response.data));
  } catch (err:any) {
    console.error(err);
    yield put(authActions.registerFailed(err.response));
  }
}

export default function* authSaga() {
  console.log('Auth Saga');
  yield takeLatest(authActions.register, handleRegisterSaga);
}
