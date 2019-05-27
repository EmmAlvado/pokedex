// @flow

import React from 'react';
import { reduxForm } from 'redux-form';
import { history } from '../../store/Provider';

import BSForm from 'react-bootstrap/Form';

export type Props = {
    children: Node,
};

const FormForRedux = function FormForRedux({ children }: Props) {
    return <BSForm>{children}</BSForm>;
};

const filterSelectValue =
    history.location.pathname.split('/').pop() !== 'Fav'
        ? history.location.pathname.split('/').pop()
        : '';

const Form = reduxForm({
    form: 'pokeForm',
    enableReinitialize: true,
    initialValues: {
        favSelector: history.location.pathname.indexOf('Fav') >= 0,
        filterSelector: filterSelectValue,
    },
})(FormForRedux);

export default Form;
