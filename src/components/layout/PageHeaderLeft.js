// @flow

import React from 'react';
import type { Node } from 'react';

export type Props = {
    children: Node,
};

function PageHeaderLeft({ children }: Props) {
    return <div className={'poke-page-header-left'}>{children}</div>;
}

export default PageHeaderLeft;
