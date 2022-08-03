import { RegisterPayLoad, authActions } from './authSlice';
import * as Effects from "redux-saga/effects";
import { PayloadAction } from '@reduxjs/toolkit';
import { register } from '../../api-client/authApi';
import { ToastContainer, toast } from 'react-toastify';
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
    toast(`${response.data.status}`)

  } catch (err:any) {

    yield put(authActions.registerFailed(err.response.data));
    toast(`${err.response.data.status}`)
  }
}

export default function* authSaga() {
  yield takeLatest(authActions.register, handleRegisterSaga);
}
