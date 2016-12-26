'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    base: {},
    action: {
        ':hover': {
            cursor: 'pointer'
        }
    }
};

var Icon = function (_Component) {
    _inherits(Icon, _Component);

    function Icon() {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    _createClass(Icon, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                glyph = _props.glyph,
                style = _props.style,
                onClick = _props.onClick,
                props = _objectWithoutProperties(_props, ['children', 'className', 'glyph', 'style', 'onClick']);

            return _react2.default.createElement('i', _extends({
                'aria-hidden': !onClick,
                className: ('icon fa fa-' + glyph + ' ' + className).trim(),
                style: _extends({}, styles[onClick ? 'action' : 'base'], style),
                onClick: onClick
            }, props));
        }
    }]);

    return Icon;
}(_react.Component);

Icon.propTypes = {
    children: function children(props, propName, componentName) {
        var result = void 0;

        if (_react2.default.Children.count() != 0) {
            result = new Error('`' + componentName + '` does not accept any children.');
        }

        return result;
    },

    className: _react.PropTypes.string,
    glyph: _react.PropTypes.string.isRequired,
    style: _react.PropTypes.object,

    onClick: _react.PropTypes.func
};

Icon.defaultProps = {
    className: '',
    style: {}
};

module.exports = (0, _radium2.default)(Icon);