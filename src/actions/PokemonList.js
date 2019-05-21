// @flow

import React from 'react';
import type {Node} from 'react';


import Card from '../components/layout/Card'
import Col from 'react-bootstrap/Col'

export type Props = {
    pokemonsList: Array<{id:number, name:string ,url:string}>
};

class PokemonList extends React.PureComponent<Props> {

    render():Node {
        return this.props.pokemonsList.map((pokemon:{id:number, name: string ,url:string}) => {
            const pokemonId = pokemon.id;

            return( <Col xs={12} sm={6} md={4} lg={3} key={"pokemon-col-" + pokemonId}>
                <Card title={pokemon.name}
                      img={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemonId + ".png"}
                      key={"pokemon-card-" + pokemonId}
                      pokemonId={pokemonId}
                >
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card>
            </Col>)
        } )
    }
}

export default PokemonList;