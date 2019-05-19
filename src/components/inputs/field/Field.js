import React from 'react';
import { Field as RFField } from 'redux-form';

const trimFn = value => value && value.trim();

const Field = function Field({ normalize, trim, ...props }) {
    let normalizeFn = undefined;

    if (normalize) {
        normalizeFn = normalize;
    } else if (trim) {
        normalizeFn = trimFn;
    }

    return <RFField {...props} normalize={normalizeFn} />;
};

export default Field;
