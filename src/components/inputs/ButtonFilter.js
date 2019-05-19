import React from 'react';
import classnames from 'classnames';

import Button from 'react-bootstrap/Button'

class ButtonFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render(){
        const { children, bsStyle, ...props} = this.props;

        return(
            <Button {...props} bsStyle={bsStyle}>{children}</Button>
        );
    }

}