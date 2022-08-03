import { PayloadAction } from "@reduxjs/toolkit";
import {call, put} from 'redux-saga/effects'
import * as actions from './actions'

export interface ResponseGenerator{
    data?:any,
}

export default function* registerSaga(action: PayloadAction) {
    try {
      const response:ResponseGenerator = yield call(api.register, action.payload);
      yield put(actions.registerActions.registerSuccess(response.data));
    } catch (err:any) {
      yield put(actions.registerActions.registerFailure(err.response.data.message));
    }
}