import { createActions } from 'redux-actions'
export const getType = (reduxAction :any) => { 
    return reduxAction().type 
}
export const registerActions = createActions({
    registerRequest: (payload) => payload,
    registerSuccess: (payload) => payload,
    registerFailure: (err) => err,
 })