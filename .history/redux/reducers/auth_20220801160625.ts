import { HYDRATE } from 'next-redux-wrapper'
import { User } from '../../interfaces/user';

export interface AuthState { 
    isLoggedIn: boolean;
    currentUser:User,
}