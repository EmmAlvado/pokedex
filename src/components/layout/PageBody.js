import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import Row from 'react-bootstrap/Row';

function PageBody({ className, children }) {
    const classNames = classnames(className, 'poke-page-body');

    return (
        <div className={classNames}>
            <Row className="poke-page-body-row">{children}</Row>
        </div>
    );
}

PageBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

PageBody.displayName = 'Page.Body';

export default PageBody;
