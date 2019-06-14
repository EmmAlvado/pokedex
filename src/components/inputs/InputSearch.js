// @flow

import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import faZoom from '@fortawesome/fontawesome-free-solid/faSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class InputSearch extends React.Component {
    onChange = e => {
        console.log(e);
    };

    render() {
        const { value, ...props } = this.props;

        return (
            <FormGroup className="poke-input-search-form-group">
                <InputGroup>
                    <FormControl
                        type="search"
                        onChange={this.onChange}
                        value={value}
                        {...props}
                    />

                    <InputGroup.Append className="poke-input-search-select-addon">
                        <FontAwesomeIcon icon={faZoom} />
                    </InputGroup.Append>
                </InputGroup>
            </FormGroup>
        );
    }
}

export default InputSearch;
