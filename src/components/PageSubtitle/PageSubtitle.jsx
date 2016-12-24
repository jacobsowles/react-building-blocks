import React, { Component, PropTypes } from 'react';

class PageSubtitle extends React.Component {
    render() {
        const {children, className, ...props} = this.props;

        return (
            <p className={`page-subtitle ${className}`.trim()} {...props}>
                {children}
            </p>
        );
    }
}

PageSubtitle.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

PageSubtitle.defaultProps = {
    className: ''
};

module.exports = PageSubtitle;
