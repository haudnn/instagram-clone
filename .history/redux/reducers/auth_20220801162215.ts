import { HYDRATE } from 'next-redux-wrapper'
import { User } from '../../interfaces/user';
import {register, getType} from '../actions'
import { AnyAction } from 'redux'

export interface AuthState { 
    isLoggedIn: boolean,
    logging?: boolean,
    currentUser?:User,
}
const initialState: AuthState = {
    isLoggedIn: false,
    logging: false,
    currentUser:undefined,
}
export default function authReducer(state = initialState, action:AnyAction ) {
    switch (action.type){
        case getType(register.registerRequest):
            return {
                ...state,
                isLoggedIn: false,
            }
        case getType(register.registerSuccess):
            return { 
                ...state,
                isLoggedIn: false,
            }
        case getType(register.registerFailure):
            return { 
                ...state,
                isLoggedIn: false,
            }
    }
}