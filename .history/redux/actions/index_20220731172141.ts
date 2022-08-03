import { createActions, createAction } from 'redux-actions'
export const getType = (reduxAction :any) => { 
    return reduxAction().type 
}
