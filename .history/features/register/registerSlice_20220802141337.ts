import { HYDRATE } from 'next-redux-wrapper'
import { registerActions, getType} from './actions'
import { AnyAction } from 'redux'
import { createReducer } from '@reduxjs/toolkit';

export interface RegisterState { 
    isloading?: boolean,
    messages?:string
}
const initialState: RegisterState = {
    isloading: false,
    messages:undefined
}

export default function authReducer(state = initialState, action:AnyAction ) {
    switch (action.type){
        case getType(registerActions.registerRequest):
            return {
                ...state,
                loading: true,
            }
        case getType(registerActions.registerSuccess):
            return { 
                ...state,
                loading: false,
                messages:action
            }
        case getType(registerActions.registerFailure):
            return { 
                ...state,
                loading: false
            }
        default:
            return state;
    }
}