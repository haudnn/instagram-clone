import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware, {Task} from 'redux-saga';
import { createWrapper,Context } from "next-redux-wrapper";

import reducer from "./reducers";
import rootSaga from "./sagas";

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const makeStore =  (context:Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};
const wrapper = createWrapper(makeStore);
export default wrapper;
