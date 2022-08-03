import { createActions, createAction } from 'redux-actions'
export const getType = (reduxAction :any) => { 
    return reduxAction().type 
}
export const registerAction = createActions({
    registerRequest: (payload) => payload,
    registerSuccess: (payload) => payload,
    registerFailure: (err) => err,
 })