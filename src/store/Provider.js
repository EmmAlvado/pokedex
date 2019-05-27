// @flow

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { routerReducer as routing, routerMiddleware } from 'react-router-redux';

const rootReducer = combineReducers({
    form: formReducer,
    routing,
});

export const history = createBrowserHistory();

const middleware = routerMiddleware(history);

const currentWindow = {};

export type Props = {
    children: Node,
};

const store = createStore(
    rootReducer,
    currentWindow &&
        currentWindow.__REDUX_DEVTOOLS_EXTENSION__ &&
        currentWindow.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(middleware)
);

function Provider({ children }: Props) {
    return <ReduxProvider store={store}>{children}</ReduxProvider>;
}

Provider.store = store;

export default Provider;
