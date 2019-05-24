import React, { Component } from 'react';
import Provider from './store/Provider';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainPageConnected from './page/MainPageConnected';

class Root extends Component {
    render() {

        return (
            <Provider>
                <Router>
                    <Route path="/:filter?" component={MainPageConnected} />
                </Router>
            </Provider>
        );
    }
}

export default Root;
