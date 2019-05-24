// @flow

import React from 'react';
import type { Node } from 'react';
import PageBody from './PageBody';
import PageHeader from './PageHeader';

export type Props = {
    children: Node,
};

function Page({ children }: Props) {
    return <div className="poke-page">{children}</div>;
}

Page.Body = PageBody;
Page.Header = PageHeader;

export default Page;
