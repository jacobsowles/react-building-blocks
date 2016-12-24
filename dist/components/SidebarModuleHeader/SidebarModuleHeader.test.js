'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SidebarModuleHeader = require('./SidebarModuleHeader');

var _SidebarModuleHeader2 = _interopRequireDefault(_SidebarModuleHeader);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SidebarModuleHeader', function () {
    var component = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(
        _SidebarModuleHeader2.default,
        null,
        'Header'
    ));
    var renderedDOM = function renderedDOM() {
        return _reactDom2.default.findDOMNode(component);
    };

    it('renders a header element with the appropriate class name', function () {
        expect(renderedDOM().tagName).toEqual('H6');

        expect(renderedDOM().className).toEqual('sidebar-module-header');
    });

    it('renders the correct text', function () {
        expect(renderedDOM().textContent).toEqual('Header');
    });
});