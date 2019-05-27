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
        const values = state.form.pokeForm.values;

        if (
            values.hasOwnProperty('filterSelector') &&
            values.hasOwnProperty('favSelector') &&
            values.favSelector
        ) {
            newLocation = '/Fav/' + values.filterSelector;
        } else if (values.hasOwnProperty('filterSelector')) {
            newLocation = '/' + values.filterSelector;
        } else {
            newLocation = '/Fav';
        }

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
