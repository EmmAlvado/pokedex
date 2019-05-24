// @flow

import React, { type ComponentType } from 'react';
import { Field as RFField } from 'redux-form';
import type { FieldProps } from 'redux-form';

export type Props = {
    ...FieldProps,
    name: string,
    component: ComponentType<FieldProps> | string,
};

const Field = function Field({ ...props }: Props) {
    return <RFField {...props} />;
};

export default Field;
