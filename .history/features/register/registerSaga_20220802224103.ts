// import { PayloadAction } from "@reduxjs/toolkit";
// import {call, put, takeLatest} from 'redux-saga/effects'
// import * as actions from './actions'
// import * as api from '../../app/requestHelper'

// export interface ResponseGenerator{
//     data?:any,
// }

// export function* handleRegisterSaga(action: PayloadAction) {
//     try {
//       const response:ResponseGenerator = yield call(api.register, action.payload);
//       yield put(actions.registerActions.registerSuccess(response.data));
//     } catch (err:any) {
//       yield put(actions.registerActions.registerFailure(err.response.data.message));
//     }
// }
// export default function* registerSaga() {
//     yield takeLatest(actions.registerActions.registerRequest, handleRegisterSaga);
//   }