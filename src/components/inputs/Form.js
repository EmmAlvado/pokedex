import React from 'react';
import { reduxForm } from 'redux-form';

import BSForm from 'react-bootstrap/Form';

const FormForRedux = function FormForRedux({ children, ...props }) {

    return (
        <BSForm {...props}>
            {children}
        </BSForm>
    );
};

const Form = reduxForm({
    form: 'pokeForm'
})(FormForRedux);

export default Form ;
