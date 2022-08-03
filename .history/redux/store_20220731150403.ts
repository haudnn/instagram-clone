import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper,Context } from "next-redux-wrapper";

import reducer from "./reducers";
import mySaga from "./sagas";

const makeStore =  (context:Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  (store as any).sagaTask = sagaMiddleware.run(mySaga);
  return store;
};
const wrapper = createWrapper(makeStore);
export default wrapper;
