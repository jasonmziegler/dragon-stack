import { GENERATION } from '../actions/types';
import fetchStates from './fetchState';

const DEFAULT_GENERATION =  { generationId: '', expiration: '' };;


const generationReducer = (state = DEFAULT_GENERATION, action) => {
    // console.log('generationReducer state', state);
    // console.log('generationReducer action', action);
    
    switch(action.type) {
        case GENERATION.FETCH:
            return {...state, status: fetchStates.fetching };
        case GENERATION.FETCH_ERROR:
            return { ...state, status: fetchStates.error, message: action.message };
        case GENERATION.FETCH_SUCCESS:
            return { ...state, status: fetchStates.success, ...action.generation };
        default:
            return state;
    }
}


export default generationReducer;