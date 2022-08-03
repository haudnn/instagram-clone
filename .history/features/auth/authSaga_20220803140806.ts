import { RegisterPayLoad, authActions } from './authSlice';
import * as Effects from "redux-saga/effects";
import { PayloadAction } from '@reduxjs/toolkit';
import {register} from '../../api-client/authApi';

const takeLatest: any = Effects.takeLatest;
const call: any = Effects.call;
const put: any = Effects.put;

function* handleRegisterSaga(payload: PayloadAction) {
  try {
    const {response} = yield call(register, payload.payload);
    console.log(response)
    yield put(authActions.registerSuccess(response.data));
  } catch (error:any) {
    console.log(error)
    yield put(authActions.registerFailed(error.response));
  }
}

export default function* authSaga() {
  console.log('Auth Saga');
  yield takeLatest(authActions.register.type, handleRegisterSaga);
}
