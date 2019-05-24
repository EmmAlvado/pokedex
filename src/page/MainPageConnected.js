// @flow

import { getFormValues } from 'redux-form';
import connect from 'react-redux/es/connect/connect';

import MainPage from './MainPage';

const MainPageConnected = (state, props) => {
    const prevLocation = props.location;
    let newLocation = '/';

    let newState = {
        values: getFormValues(props.id)(state),
    };

    if (
        state.form.hasOwnProperty('pokeForm') &&
        state.form.pokeForm.hasOwnProperty('values')
    ) {
        newLocation = '/' + state.form.pokeForm.values.filterSelector;

        if (newLocation !== props.location.pathname) {
            newState = {
                values: getFormValues(props.id)(state),
                location: {
                    ...prevLocation,
                    pathname: newLocation,
                },
            };
        }
    }

    return newState;
};

export default connect(MainPageConnected)(MainPage);
