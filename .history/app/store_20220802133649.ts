import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
