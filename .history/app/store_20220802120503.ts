import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { createWrapper,Context } from "next-redux-wrapper";

import rootSaga from "./sagas";
import rootReducer from "./reducers";
const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware(), sagaMiddleware]

const preloadedState = {}

const store = configureStore({reducer: rootReducer,middleware,preloadedState})
// @ts-ignore TODO: resolve 
store.sagaTask = sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export default store
