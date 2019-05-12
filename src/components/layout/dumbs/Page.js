import PropTypes from 'prop-types';
import React from 'react';
import PageBody from './PageBody';
import PageHeader from './PageHeader';

function Page({ className, children }) {

    return <div className="poke-page">{children}</div>;
}

Page.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

Page.Body = PageBody;
Page.Header = PageHeader;

export default Page;
