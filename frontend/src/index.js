import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/Dragon';

import './index.css';

const DEFAULT_GENERATION =  { generationId: '', expiration: '' };;

const GENERATION_ACTION_TYPE = 'GENERATION_ACTION_TYPE';
const generationReducer = (state, action) => {
    console.log('generationReducer state', state);
    console.log('generationReducer action', action);
    
    if (action.type === GENERATION_ACTION_TYPE) {
        return { generation: action.generation };
    }

    return { generation: DEFAULT_GENERATION };
}

const store = createStore(generationReducer);

store.subscribe(() => console.log('store state update', store.getState()));

console.log('store', store);


store.dispatch({type: 'foo'});
store.dispatch({ 
    type: GENERATION_ACTION_TYPE,
    generation: { generationId: 'goo', expiration: 'bar'}
});

console.log('store.getState()',store.getState());

const generationActionCreator = (payload) => {
    return {
        type: GENERATION_ACTION_TYPE,
        generation: payload
    };
}

const zooAction = generationActionCreator({
    generationId: 'zoo', expiration: 'bar'
});

store.dispatch(zooAction);

fetch('http://localhost:3000/generation')
.then(response => response.json())
.then(json => {
    store.dispatch(generationActionCreator(json.generation))
})

ReactDOM.render(
<div>
<h2>Dragon Stack</h2>
<Generation />
<Dragon />
</div>
, document.getElementById('root'));

