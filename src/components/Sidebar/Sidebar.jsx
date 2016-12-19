import React, { Component, PropTypes } from 'react';

class Sidebar extends Component {
    render() {
        const {children, className, ...props} = this.props;

        return (
            <aside className={`sidebar ${className}`.trim()} {...props}>
                {children}
            </aside>
        );
    }
}

Sidebar.propTypes = {
    children: function(props, propName, componentName) {
        const prop = props[propName];
        let result;

        React.Children.forEach(prop, function(child) {
            if (child.type.name !== 'SidebarModule') {
                result = new Error('`' + componentName + '` only accepts children of type `SidebarModule`.');
            }
        });

        return result;
    },

    className: PropTypes.string
};

Sidebar.defaultProps = {
    className: ''
};

export default Sidebar;
