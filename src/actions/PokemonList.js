// @flow

import React from 'react';
import type { Node } from 'react';
import classnames from 'classnames';

import Card from '../components/layout/Card';
import Col from 'react-bootstrap/Col';

export type Props = {
    pokemonsList: Array<{ id: number, name: string, url: string }>,
    isFavTime: boolean,
};

class PokemonList extends React.PureComponent<Props> {
    mayHide = (id: number) => {
        const newId: string = id.toString();

        const favoritesPokemons: string =
            localStorage.getItem('favoritesPokemons') || '';

        const hasFavoritesPokemons: ?boolean =
            favoritesPokemons.split(',').indexOf(newId) < 0;
        return hasFavoritesPokemons;
    };

    render(): Node {
        return this.props.pokemonsList.map(
            (pokemon: { id: number, name: string, url: string }) => {
                const pokemonId: number = pokemon.id;
                const classNames = classnames({
                    'poke-not-fav':
                        this.props.isFavTime && this.mayHide(pokemonId),
                });

                return (
                    <Col
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        key={'pokemon-col-' + pokemonId}
                        className={classNames}
                    >
                        <Card
                            title={pokemon.name}
                            img={
                                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
                                pokemonId +
                                '.png'
                            }
                            key={'pokemon-card-' + pokemonId}
                            pokemonId={pokemonId}
                        >
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card>
                    </Col>
                );
            }
        );
    }
}

export default PokemonList;
