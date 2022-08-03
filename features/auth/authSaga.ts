import { authActions } from './authSlice';
import * as Effects from "redux-saga/effects";
import { PayloadAction } from '@reduxjs/toolkit';

const takeLatest: any = Effects.takeLatest;
const call: any = Effects.call;
const put: any = Effects.put;

export interface ResponseGenerator{
    data?:any,
}



export default function* authSaga() {
}
