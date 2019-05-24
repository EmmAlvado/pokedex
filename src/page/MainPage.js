// @flow

import React from 'react';
import { reduxForm } from 'redux-form';
import type { Node } from 'react';
import type { RouterHistory } from 'history';

import Page from '../components/layout/Page';
import PageHeader from '../components/layout/PageHeader';
import PageBody from '../components/layout/PageBody';
import Form from '../components/inputs/Form';
import DropdownSelectField from '../components/inputs/field/DropdownSelectField';
import PokemonList from '../actions/axiosPokemon';

export type ContextRouter = {|
    history: RouterHistory,
    location: { pathname: string },
|};

class MainPage extends React.Component<ContextRouter> {
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.history.push(prevProps.location.pathname);
        }
    }

    render(): Node {
        return (
            <Form id="pageForm">
                <PageHeader>
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
                </PageHeader>
                <Page>
                    <PageBody>
                        <PokemonList filter={this.props.location.pathname} />
                    </PageBody>
                </Page>
            </Form>
        );
    }
}

export default reduxForm({
    form: 'pageForm',
})(MainPage);
