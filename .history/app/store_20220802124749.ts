import { createStore, applyMiddleware, Store } from "redux"
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from "next-redux-wrapper";

import rootReducer from "./reducers";
import rootSaga from "./sagas";


const makeStore =  () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};
export const makeStore = () =>
  configureStore({
    reducer:  rootReducer,
  });
// @ts-ignore TODO: resolve 
store.sagaTask = sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof makeStore.dispatch
export type AppStore = typeof makeStore

const wrapper = createWrapper(makeStore);
export default wrapper;
