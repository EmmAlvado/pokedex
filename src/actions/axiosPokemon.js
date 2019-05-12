import React from 'react';
import axios from 'axios';

import Card from '../components/layout/dumbs/Card'
import Col from 'react-bootstrap/Col'

class PokemonList extends React.Component {
    state = {
        pokemonsList: []
    }

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=784`)
            .then(res => {
                const pokemons = res.data;
                console.log(res)
                this.setState(prevState => ({
                    ...prevState,
                    pokemonsList: pokemons.results
                }));
            })


    }

    render() {
        return this.state.pokemonsList.map((pokemon , key) => {
            const pokemonId = key + 1;
            //console.log(pokemon)
            return( <Col xs={12} sm={6} md={4} lg={3}>
                <Card title={pokemon.name}
                      img={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemonId + ".png"}
                      key={"pokemon-card-" + pokemonId}>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card>
            </Col>)
        } )
    }
}

export default PokemonList;