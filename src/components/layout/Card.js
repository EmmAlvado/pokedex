// @flow

import React, { Component } from 'react';
import type { Node } from 'react';

import classnames from 'classnames';
import FavInput from '../misc/FavInput';
import BsCard from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export type Props = {
    className?: string,
    title: string,
    children?: Node | string,
    img: string,
    pokemonId: number,
};

class Card extends Component<Props> {
    render(): Node {
        const { className, title, children, img, pokemonId } = this.props;
        const classNames = classnames(className, 'poke-card');

        return (
            <BsCard className={classNames}>
                <FavInput id={pokemonId} />
                <BsCard.Img variant="top" src={img} />
                <BsCard.Body>
                    <BsCard.Title>
                        #{pokemonId} - {title}
                    </BsCard.Title>
                    <BsCard.Text>{children}</BsCard.Text>
                    <Button variant="primary">Go somewhere</Button>
                </BsCard.Body>
            </BsCard>
        );
    }
}

export default Card;
