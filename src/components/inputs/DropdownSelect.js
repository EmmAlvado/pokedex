import React from 'react';
import memoize from 'memoize-one';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const findFn = memoize((key, value) => option => option[key] === value);

function DropdownSelect({
      id,
      disabled,
      placeholder,
      selectedValue,
      labelKey,
      valueKey,
      options,
      onSelect,
      ...props
  }) {
    const selectedOption = options.find(findFn(valueKey, selectedValue));

    return (
        <DropdownButton
            disabled={disabled}
            id={id}
            title={selectedOption ? selectedOption[labelKey] : placeholder}
            {...props}
        >
            {options.map(option => {
                return(
                <Dropdown.Item
                    key={"filter"+ option[valueKey]}
                    onClick={() => onSelect(option)}
                >
                    {option[labelKey]}
                </Dropdown.Item>
            )})}
        </DropdownButton>
    );
}

export default DropdownSelect;
