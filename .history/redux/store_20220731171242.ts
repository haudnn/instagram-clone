import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware, {Task} from 'redux-saga';
import { createWrapper,Context } from "next-redux-wrapper";

import reducer from "./reducers";
import rootSagafrom "./sagas";

const makeStore =  (context:Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  (store as any).sagaTask = sagaMiddleware.run(mySaga);
  return store;
};
const wrapper = createWrapper(makeStore);
export default wrapper;
