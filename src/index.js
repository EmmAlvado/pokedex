import React from 'react'
import { render } from 'react-dom'
import Page from './components/layout/dumbs/Page'
import PageBody from './components/layout/dumbs/PageBody'
import PokemonList from './actions/axiosPokemon'

import './style/main.css'


render(
    <React.Fragment>
        <Page.Header>HEADER</Page.Header>
        <Page>
            <PageBody>
                <PokemonList />
            </PageBody>
        </Page>
    </React.Fragment>,
  document.getElementById('root')
)
