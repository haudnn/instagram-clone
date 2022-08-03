import { all} from 'redux-saga/effects'
import authSaga from '../features/auth/authSaga'

function* rootSaga(){
  console.log("Root Saga")
  yield all([authSaga()])
}

export default rootSaga