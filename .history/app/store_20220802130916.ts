import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from "next-redux-wrapper";

import rootReducer from "./reducers";
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();


// const makeStore =  () => {
//   const sagaMiddleware = createSagaMiddleware();
//   const store = createStore(reducer, applyMiddleware(sagaMiddleware));
//   (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
//   return store;
// };
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

const wrapper = createWrapper(makeStore);
export default wrapper;
