import React, { Component, PropTypes } from 'react';
import style from './ToggleSwitch.scss';

class ToggleSwitch extends Component {
    render() {
        const {children, className, size, ...props} = this.props;

        return (
            <div className={`toggle-switch ${className}`.trim()}>
                <label className="switch">
                    <input type="checkbox" />
                    <div className="slider round"></div>
                </label>

                {this.props.children}
            </div>
        );
    }
}

ToggleSwitch.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf('small', 'medium', 'large'),
    style: PropTypes.object
};

ToggleSwitch.defaultProps = {
    className: '',
    size: 'medium'
};

module.exports = ToggleSwitch;
