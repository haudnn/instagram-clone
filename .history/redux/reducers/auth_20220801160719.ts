import { HYDRATE } from 'next-redux-wrapper'
import { User } from '../../interfaces/user';

export interface AuthState { 
    isLoggedIn: boolean,
    logging?: boolean,
    currentUser?:User,
}