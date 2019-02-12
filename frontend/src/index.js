import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import rootReducer from './reducers';
//import { generationActionCreator } from './actions/generation';

import './index.css';

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

//store.subscribe(() => console.log('store state update', store.getState()));

// fetch('http://localhost:3000/generation')
// .then(response => response.json())
// .then(json => {
//     store.dispatch(generationActionCreator(json.generation))
// });

ReactDOM.render(
    <Provider store={store}>
        <div>
            <h2>Dragon Stack</h2>
            <Generation />
            <Dragon />
        </div>
    </Provider>,
     document.getElementById('root'));

