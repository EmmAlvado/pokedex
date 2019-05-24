// @flow

import React from 'react';
import type { Node } from 'react';

import Row from 'react-bootstrap/Row';

export type Props = {
    children: Node,
};

function PageBody({ children }: Props) {
    return (
        <div className="poke-page-body">
            <Row className="poke-page-body-row">{children}</Row>
        </div>
    );
}

PageBody.displayName = 'Page.Body';

export default PageBody;
