import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
    ConnectedRouter,
    routerReducer as routing,
    routerMiddleware,
} from 'react-router-redux';

import createHistory from 'history/createMemoryHistory';

const rootReducer = combineReducers({
    form: formReducer,
    routing,
})

const history = createHistory();

const middleware = routerMiddleware(history);

let currentWindow = {};

const store = createStore(
    rootReducer,
    currentWindow &&
    currentWindow.__REDUX_DEVTOOLS_EXTENSION__ &&
    currentWindow.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(middleware)
);

function Provider({ children }) {
    return (
        <ReduxProvider store={store}>
                { children }
        </ReduxProvider>
    );
}

Provider.store = store;

export default Provider;