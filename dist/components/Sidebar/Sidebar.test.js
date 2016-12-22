'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Sidebar = require('./Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _SidebarModule = require('../SidebarModule/SidebarModule');

var _SidebarModule2 = _interopRequireDefault(_SidebarModule);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Sidebar', function () {
    var component = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(
        _Sidebar2.default,
        null,
        _react2.default.createElement(
            _SidebarModule2.default,
            null,
            _react2.default.createElement(
                'p',
                null,
                'Content'
            )
        ),
        _react2.default.createElement(
            _SidebarModule2.default,
            null,
            _react2.default.createElement(
                'p',
                null,
                'More Content'
            )
        )
    ));
    var renderedDOM = function renderedDOM() {
        return _reactDom2.default.findDOMNode(component);
    };

    it('renders an aside parent element with the appropriate class name', function () {
        expect(renderedDOM().tagName).toEqual('ASIDE');

        expect(renderedDOM().className).toEqual('sidebar');
    });

    it('renders all children', function () {
        expect(renderedDOM().children.length).toEqual(2);
    });
});