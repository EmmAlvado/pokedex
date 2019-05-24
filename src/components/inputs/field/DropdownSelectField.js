// @flow

import React from 'react';
import type { Node } from 'react';

import DropdownSelect from '../DropdownSelect';
import Field from './Field';

const valueKey = 'value';

function DropdownSelectFormAware({
    input: { value: selectedValue, onChange },
    actualFilter,
    ...props
}) {
    delete props.meta;

    const preselectedValue = actualFilter.replace('/', '');
    let myPreselectedValue = selectedValue;

    if (preselectedValue.length > 0) {
        myPreselectedValue = preselectedValue;
    }
    return (
        <DropdownSelect
            selectedValue={myPreselectedValue}
            valueKey={valueKey}
            labelKey="label"
            onSelect={option => onChange(option[valueKey])}
            {...props}
        />
    );
}

export type Props = {
    actualFilter: string,
    id: string,
    name: string,
    options: Array<{ label: string, value: string }>,
    placeholder: string,
};

class DropdownSelectField extends React.Component<Props> {
    render(): Node {
        return <Field component={DropdownSelectFormAware} {...this.props} />;
    }
}

export default DropdownSelectField;
