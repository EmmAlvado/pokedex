import React from 'react';
import DropdownSelect from '../DropdownSelect';
import Field from './Field';

const valueKey = "value";

function DropdownSelectFormAware({
       input: { value: selectedValue, onChange },
       ...props
   }) {
    delete props.meta;

    return (
        <DropdownSelect
            selectedValue={selectedValue}
            valueKey={valueKey}
            labelKey="label"
            onSelect={option => onChange(option[valueKey])}
            {...props}
        />
    );
}

class DropdownSelectField extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render(){
        return <Field component={DropdownSelectFormAware} {...this.props} />;
    }
}

export default DropdownSelectField;



