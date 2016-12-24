'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _SidebarHeader = require('./SidebarHeader');

var _SidebarHeader2 = _interopRequireDefault(_SidebarHeader);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SidebarHeader', function () {
    var component = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(
        _SidebarHeader2.default,
        null,
        _react2.default.createElement(
            'a',
            { href: '/' },
            'Site Title'
        )
    ));
    var renderedDOM = function renderedDOM() {
        return (0, _reactDom.findDOMNode)(component);
    };

    it('renders a header element with the appropriate class name', function () {
        expect(renderedDOM().tagName).toEqual('HEADER');

        expect(renderedDOM().className).toEqual('sidebar-header');
    });

    it('renders children', function () {
        expect(renderedDOM().children[0].tagName).toEqual('A');
    });
});