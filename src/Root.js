import React, { Component } from 'react';
import Provider from './store/Provider'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainPage from './page/MainPage'

class Root extends Component {

    render() {
        return (
            <Provider>
                <Router>
                    <Route path="/:filter?" component={MainPage} />
                </Router>
            </Provider>
        );
    }
}

export default Root;