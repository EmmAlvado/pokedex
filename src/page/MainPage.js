// @flow

import React from 'react';
import { reduxForm } from 'redux-form';
import type { Node } from 'react';
import type { RouterHistory } from 'history';

import Page from '../components/layout/Page';
import PageHeader from '../components/layout/PageHeader';
import PageHeaderLeft from '../components/layout/PageHeaderLeft';
import PageBody from '../components/layout/PageBody';
import Form from '../components/inputs/Form';
import InputSearch from '../components/inputs/InputSearch';
import DropdownSelectField from '../components/inputs/field/DropdownSelectField';
import FavNavField from '../components/inputs/field/FavNavField';
import AxiosPokemon from '../actions/axiosPokemon';

export type ContextRouter = {|
    history: RouterHistory,
    location: { pathname: string },
|};

class MainPage extends React.Component<ContextRouter> {
    componentDidUpdate() {
        if (
            this.props.location.pathname !==
            this.props.history.location.pathname
        ) {
            this.props.history.push(this.props.location.pathname);
        }
    }

    render(): Node {
        return (
            <Form location={this.props.location} id="pageForm">
                <PageHeader>
                    <PageHeaderLeft>
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
                        <InputSearch />
                    </PageHeaderLeft>
                    <div>
                        <FavNavField name="favSelector" />
                    </div>
                </PageHeader>
                <Page>
                    <PageBody>
                        <AxiosPokemon filter={this.props.location.pathname} />
                    </PageBody>
                </Page>
            </Form>
        );
    }
}

export default reduxForm({
    form: 'pageForm',
})(MainPage);
