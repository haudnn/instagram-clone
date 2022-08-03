// import { takeLatest, call, put} from 'redux-saga/effects'
// import * as actions from './actions'
// import * as api from './requestHelper'
// import { registerPayLoad } from '../interfaces/payload'

// export interface registerAction { 
//   type: string, 
//   payload: registerPayLoad
// }
// export interface ResponseGenerator{
//     data?:any,
// }
// function* registerSaga(action: registerAction) {
//     try {
//       const response:ResponseGenerator = yield call(api.register, action.payload);
//       yield put(actions.registerActions.registerSuccess(response.data));
//     } catch (err:any) {
//       yield put(actions.registerActions.registerFailure(err.response.data.message));
//     }
//   }

function* rootSaga(){
  // yield takeLatest(actions.registerActions.registerRequest, registerSaga);
}

export default rootSaga