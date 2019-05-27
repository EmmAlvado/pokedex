// @flow

import React from 'react';
import type { Node } from 'react';

import classnames from 'classnames';
import { faHeart as faHeartO } from '@fortawesome/fontawesome-free-solid';
import faHeart from '@fortawesome/fontawesome-free-regular/faHeart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type Props = { selected: boolean, main?: boolean };

const FavIcon = ({ selected, main }: Props) => {
    const classNames = classnames('poke-fav-input', {
        active: selected,
        main: main,
    });
    const icon: Node = selected ? faHeartO : faHeart;

    return (
        <div className={classNames}>
            <FontAwesomeIcon icon={icon} />
        </div>
    );
};

export default FavIcon;
