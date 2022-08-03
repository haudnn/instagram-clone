import { HYDRATE } from 'next-redux-wrapper'
import { User } from '../../interfaces/user';
import {register} from '../actions'
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