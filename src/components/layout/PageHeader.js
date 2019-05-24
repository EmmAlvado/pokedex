// @flow

import React from 'react';
import type { Node } from 'react';

export type Props = {
    children: Node,
};

function PageHeader({ children }: Props) {
    return <div className={'poke-page-header'}>{children}</div>;
}

export default PageHeader;
