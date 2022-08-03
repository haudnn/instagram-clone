import { takeLatest, call, put} from 'redux-saga/effects'
import * as actions from './actions'
import * as api from './requestHelper'

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}
function* registerSaga(action:any) {
    try {
      const response:ResponseGenerator = yield call(api.register, action.payload);
      yield put(actions.register.registerSuccess(response.data));
    } catch (err:any) {
      yield put(actions.register.registerFailure(err.response.data.message));
    }
  }

function* rootSaga(){
    yield takeLatest(actions.register.registerRequest, registerSaga);
}
export default rootSaga