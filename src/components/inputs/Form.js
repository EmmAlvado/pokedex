// @flow

import React from 'react';
import { reduxForm } from 'redux-form';

import BSForm from 'react-bootstrap/Form';

export type Props = {
    children: Node,
};

const FormForRedux = function FormForRedux({ children }: Props) {
    return <BSForm>{children}</BSForm>;
};

const Form = reduxForm({
    form: 'pokeForm',
})(FormForRedux);

export default Form;
