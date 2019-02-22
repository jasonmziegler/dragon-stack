import { ACCOUNT_DRAGONS } from '../actions/types';
import fetchStates from './fetchState';

const DEFAULT_ACCOUNT_DRAGONS = { dragons: [] };

const accountDragons = (state = DEFAULT_ACCOUNT_DRAGONS, actions) => {
    switch(actions.type) {
        case ACCOUNT_DRAGONS.FETCH:
            return {...state, status: fetchStates.fetching};
        case ACCOUNT_DRAGONS.FETCH_ERROR:
            return {...state, status: fetchStates.error, message: actions.message };
        case ACCOUNT_DRAGONS.FETCH_SUCCESS:
            return {
                ...state,
                status: fetchStates.success,
                message: actions.message,
                dragons: actions.dragons
            };
        default:
            return state;
    }
}

export default accountDragons;