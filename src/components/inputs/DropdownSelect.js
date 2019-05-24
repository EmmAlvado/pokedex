// @flow

import React from 'react';
import memoize from 'memoize-one';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const findFn = memoize((key, value) => option => option[key] === value);

export type Props = {
    id: string,
    disabled?: boolean,
    placeholder?: Node | string,
    selectedValue?: string,
    labelKey: string,
    valueKey: string,
    options: Array<{ label: string, value: string }>,
    onSelect: ({ label: string, value: string }) => void,
};

function DropdownSelect({
    id,
    disabled,
    placeholder,
    selectedValue,
    labelKey,
    valueKey,
    options,
    onSelect,
}: Props) {
    const selectedOption = options.find(findFn(valueKey, selectedValue));

    return (
        <DropdownButton
            disabled={disabled}
            id={id}
            title={selectedOption ? selectedOption[labelKey] : placeholder}
        >
            {options.map((option: { label: string, value: string }) => {
                return (
                    <Dropdown.Item
                        key={'filter' + option[valueKey]}
                        onClick={() => onSelect(option)}
                    >
                        {option[labelKey]}
                    </Dropdown.Item>
                );
            })}
        </DropdownButton>
    );
}

export default DropdownSelect;
