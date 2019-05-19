import React from 'react';
import classnames from "classnames";

function PageHeader({ className, layout, children }) {
    const classNames = classnames(className, 'poke-page-header');

    return <div className={classNames}>{children}</div>;
}


export default PageHeader;