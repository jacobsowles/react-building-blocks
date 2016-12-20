import React, { Component, PropTypes } from 'react';
import styles from './Sidebar.scss';

class Sidebar extends Component {
    render() {
        const {children, className, height, style, width, ...props} = this.props;

        if (height && !style.height) {
            style.height = height;
        }

        if (width && !style.width) {
            style.width = width;
        }

        return (
            <aside
                className={`sidebar ${className}`.trim()}
                style={style}
                {...props}
            >
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

    className: PropTypes.string,
    height: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.string
};

Sidebar.defaultProps = {
    className: '',
    style: {}
};

export default Sidebar;
