import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function receiptReducer(state = initialState, action) {
    console.log('reducer', state, action)
    switch (action.type) {
        case types.ADD_NEW_RECEIPT:
            return  Object.assign({}, state,  {
                title: action.title,
                text: action.text,
                date: action.date
            })
        default:
            return state;
    }
}