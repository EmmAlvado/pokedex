// @flow

import React from 'react';
import axios from 'axios';

import PokemonList from './PokemonList'

export type Props = {
    filter?: string
};

export type State = {
    pokemonsList: Array<{id:number, name:string ,url:string}>
};

class AxiosPokemon extends React.Component<Props, State> {
    state = {
        pokemonsList: []
    }

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=807`)
            .then(res => {
                const pokemons = res.data;
                this.setState(prevState => ({
                    ...prevState,
                    pokemonsList: this.addId(pokemons.results)
                }));
            })

    }

    addId = (poke:Array<{ id:number, name:string ,url:string}>) => {

        poke.forEach(function(el:{ id:number, name:string ,url:string}){
            const urlSplit = el.url.split('/');
            const id = urlSplit[urlSplit.length -2];

            el.id = parseInt(id);
        })

        return poke;
    }

    filterAsc = ( a:{id:number, name:string ,url:string}, b:{id:number, name:string ,url:string}) => {

        if (a.name < b.name) return -1;
        else if (a.name === b.name) return 0;
        else return 1;

    }

    filterDesc = ( a:{id:number, name:string ,url:string}, b:{id:number, name:string ,url:string}) => {

        if (a.name > b.name) return -1;
        else if (a.name === b.name) return 0;
        else return 1;

    }

    filterIdDesc = ( a:{id:number, name:string ,url:string}, b:{id:number, name:string ,url:string}) => {

        if (a.id > b.id) return -1;
        else if (a.id === b.id) return 0;
        else return 1;

    }

    render() {
        const {filter} = this.props;

        let poke = this.state.pokemonsList;

        switch(filter){
            case '/AlphaAsc':
                poke = this.state.pokemonsList.slice(0).sort(this.filterAsc);
                break;
            case '/AlphaDesc':
                poke = this.state.pokemonsList.slice(0).sort(this.filterDesc);
                break;
            case '/IdAsc':
                poke = this.state.pokemonsList;
                break;
            case '/IdDesc':
                poke = this.state.pokemonsList.slice(0).sort(this.filterIdDesc);;
                break;
            default:
                poke = this.state.pokemonsList;
                break;

        }

        return (<PokemonList pokemonsList={poke} />)
    }
}

export default AxiosPokemon;