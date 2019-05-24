// @flow

import React from 'react';
import type { Node } from 'react';

import classnames from 'classnames';
import BsCard from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export type Props = {
    className?: string,
    title: string,
    children?: Node | string,
    img: string,
    pokemonId: number,
};

function Card({ className, title, children, img, pokemonId }: Props) {
    const classNames = classnames(className, 'poke-card');

    return (
        <BsCard className={classNames}>
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

export default Card;
