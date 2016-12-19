import React, { Component, PropTypes } from 'react';

class SidebarModuleHeader extends React.Component {
    render() {
        const {children, className, ...props} = this.props;

        return (
            <h2 className={`sidebar-module-header ${className}`.trim()} {...props}>
                {children}
            </h2>
        );
    }
}

SidebarModuleHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

SidebarModuleHeader.defaultProps = {
    className: ''
};

export default SidebarModuleHeader;
