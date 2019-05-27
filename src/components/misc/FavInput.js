// @flow

import React from 'react';
import type { Node } from 'react';

import FavIcon from './dumb/FavIcon';

export type Props = {
    id: number,
};

export type State = {
    isFav: boolean,
};

class FavInput extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isFav: this.isItFav(this.props.id),
        };
    }

    isItFav = (id: number) => {
        if (localStorage.getItem('favoritesPokemons')) {
            const favoritesPokemons: string =
                localStorage.getItem('favoritesPokemons') || '';
            const favPkmnArray = favoritesPokemons.split(',');
            if (favPkmnArray.indexOf(id.toString()) >= 0) {
                return true;
            }
        }
        return false;
    };

    toggleFav = (id: number) => {
        const newId: string = id.toString();

        const favoritesPokemons: string =
            localStorage.getItem('favoritesPokemons') || '';

        if (!favoritesPokemons) {
            localStorage.setItem('favoritesPokemons', newId);
            this.setState({ isFav: true });
        } else if (favoritesPokemons.split(',').indexOf(newId) >= 0) {
            const pokemonArray = favoritesPokemons.split(',');
            pokemonArray.splice(pokemonArray.indexOf(newId), 1);
            const pokemonFav: string = pokemonArray.toString();
            localStorage.clear();
            localStorage.setItem('favoritesPokemons', pokemonFav);
            this.setState({ isFav: false });
        } else {
            localStorage.setItem(
                'favoritesPokemons',
                favoritesPokemons + ',' + newId
            );
            this.setState({ isFav: true });
        }
    };

    render(): Node {
        const { id } = this.props;
        const { isFav } = this.state;

        return <FavIcon selected={isFav} action={() => this.toggleFav(id)} />;
    }
}

export default FavInput;
