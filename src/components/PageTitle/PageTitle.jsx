import React, { Component, PropTypes } from 'react';

class PageTitle extends React.Component {
    render() {
        const {children, className, ...props} = this.props;

        return (
            <h1 className={`page-title ${className}`.trim()} {...props}>
                {children}
            </h1>
        );
    }
}

PageTitle.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

PageTitle.defaultProps = {
    className: ''
};

module.exports = PageTitle;
