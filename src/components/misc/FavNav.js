// @flow

import React from 'react';

import type { Node } from 'react';
import FormCheck from 'react-bootstrap/FormCheck';
import FormGroup from 'react-bootstrap/FormGroup';

import FavIcon from './dumb/FavIcon';

export type Props = {
    onClick: void,
    isFav: boolean,
};

class FavNav extends React.Component<Props> {
    render(): Node {
        const { isFav, ...props } = this.props;

        return (
            <FormGroup
                className="poke-fav-input-container"
                controlId="FavCheck"
            >
                <FormCheck
                    {...props}
                    label={<FavIcon selected={isFav} />}
                    type="checkbox"
                />
            </FormGroup>
        );
    }
}

export default FavNav;
