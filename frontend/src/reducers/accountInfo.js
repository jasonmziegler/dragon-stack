import { ACCOUNT_INFO } from '../actions/typs';
import fetchStates from './fetchState';

const accountInfo = (state = {}, action) => {
    switch (action.type) {
        case ACCOUNT_INFO.FETCH:
            return {...state, status: fetchStates.fetching };
        case ACCOUNT_INFO.FETCH_ERROR:
            return {...state, status: fetchStates.error, message: action.message };
        case ACCOUNT_INFO.FETCH_SUCCESS:
            return {
                ...state, 
                status: fetchStates.success, 
                message: action.message,
                ...action.info
             };
        default:
             return state;
    }
}

export default accountInfo;