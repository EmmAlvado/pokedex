// @flow

import React from 'react'
import { reduxForm, getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import type {Node} from 'react';
import type {
    RouterHistory,
} from 'history';

import Page from '../components/layout/Page'
import PageBody from '../components/layout/PageBody'
import Form from '../components/inputs/Form'
import DropdownSelectField from '../components/inputs/field/DropdownSelectField'
import PokemonList from '../actions/axiosPokemon'


export type ContextRouter = {|
    history: RouterHistory,
    location: {newpath: string, pathname:string}
|};


class MainPage extends React.Component<ContextRouter> {

    componentWillReceiveProps(nextProps) {
        if(nextProps.location.newpath !== this.props.location.pathname){
            this.props.history.push(nextProps.location.newpath)
        }
    }

    render():Node {
        return(
            <Form id="pageForm">
                <Page.Header>
                    <DropdownSelectField
                        actualFilter={this.props.location.pathname}
                        id="filterSelector"
                        placeholder="Filter by"
                        name="filterSelector"
                        options={[
                            {
                                label: 'A to Z',
                                value: 'AlphaAsc',
                            },
                            {
                                label: 'Z to A',
                                value: 'AlphaDesc',
                            },
                            {
                                label: 'Id ascendant',
                                value: 'IdAsc',
                            },
                            {
                                label: 'Id descendant',
                                value: 'IdDesc',
                            },
                        ]}
                    />
                </Page.Header>
                <Page>
                    <PageBody>
                        <PokemonList filter={this.props.location.pathname} />
                    </PageBody>
                </Page>
            </Form>
        )
    }
}


MainPage = reduxForm({
    form: 'pageForm'
})(MainPage)


const mapStateToProps = (state, props) => {

    const prevLocation = props.location;
    let newLocation = "/";

    if ( state.form.hasOwnProperty("pokeForm") && state.form.pokeForm.hasOwnProperty("values") ) {
        newLocation = "/"+state.form.pokeForm.values.filterSelector;
    }

    return {
        values: getFormValues(props.id)(state),
        location: {
            ...prevLocation,
            newpath: newLocation
        }
    };
};


export default connect(mapStateToProps)(MainPage);