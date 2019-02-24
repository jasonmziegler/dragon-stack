import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {Router, Switch, Route, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import createBrowserHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import Root from './components/Root';
import AccountDragons from './components/AccountDragons';
import { fetchAuthenticated } from './actions/account';
//import { generationActionCreator } from './actions/generation';
import './index.css';
// import { fetchPublicDragons } from './actions/publicDragons';

const history = createBrowserHistory();

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

// store.dispatch(fetchPublicDragons());

// const RedirectToAccountDragons = () => {
//     return (
//         <Redirect to={{ pathname: '/account-dragons'}} />
//     );
// }

//store.subscribe(() => console.log('store state update', store.getState()));

// fetch('http://localhost:3000/generation')
// .then(response => response.json())
// .then(json => {
//     store.dispatch(generationActionCreator(json.generation))
// });

const AuthRoute = props => {
    if (!store.getState().account.loggedIn) {
        return <Redirect to={{ pathname: '/' }} />
    }

    const { component, path } = props;
    return <Route path={path} component={component}/>;
};

store.dispatch(fetchAuthenticated())
.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Root}/>
                    <AuthRoute path='/account-dragons' component={AccountDragons}/>
                </Switch>
            </Router>
        </Provider>,
         document.getElementById('root'));   
});

