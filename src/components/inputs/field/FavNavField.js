// @flow

import React from 'react';
import type { Node } from 'react';

import FavNav from '../../misc/FavNav';
import Field from './Field';

function FavNavFormAware({ input, ...props }) {
    delete props.meta;

    return (
        <FavNav
            {...props}
            {...input}
            isFav={input.value}
            checked={input.value}
        />
    );
}

export type Props = {
    name: string,
};

class FavNavField extends React.Component<Props> {
    render(): Node {
        return <Field component={FavNavFormAware} {...this.props} />;
    }
}

export default FavNavField;
