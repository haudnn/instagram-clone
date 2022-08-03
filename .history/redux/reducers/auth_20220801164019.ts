import { HYDRATE } from 'next-redux-wrapper'
import { User } from '../../interfaces/user';
import { registerAction, getType} from '../actions'
import { AnyAction } from 'redux'


export interface AuthState { 
    isLoggedIn: boolean,
    loading?: boolean,
    currentUser?:User,
}
const initialState: AuthState = {
    isLoggedIn: false,
    loading: false,
    currentUser:undefined,
}

export default function authReducer(state = initialState, action:AnyAction ) {
    switch (action.type){
        case getType(register.registerRequest):
            return {
                ...state,
                loading: true,
            }
        case getType(register.registerSuccess):
            return { 
                ...state,
                loading: false,
            }
        case getType(register.registerFailure):
            return { 
                ...state,
                loading: false
            }
        default:
            return state;
    }
}