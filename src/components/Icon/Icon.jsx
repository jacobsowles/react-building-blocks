import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

const styles = {
    base: {},
    action: {
        ':hover': {
            cursor: 'pointer'
        }
    }
};

class Icon extends Component {
    render() {
        const {children, className, glyph, style, onClick, ...props} = this.props;

        return (
            <i
                aria-hidden={!onClick}
                className={`icon fa fa-${glyph} ${className}`.trim()}
                style={{
                    ...styles[onClick ? 'action' : 'base'],
                    ...style
                }}
                onClick={onClick}
                {...props}
            />
        );
    }
}

Icon.propTypes = {
    children: function(props, propName, componentName) {
        let result;

        if (React.Children.count() != 0) {
            result = new Error('`' + componentName + '` does not accept any children.');
        }

        return result;
    },

    className: PropTypes.string,
    glyph: PropTypes.string.isRequired,
    style: PropTypes.object,

    onClick: PropTypes.func
};

Icon.defaultProps = {
    className: '',
    style: {}
};

module.exports = Radium(Icon);
