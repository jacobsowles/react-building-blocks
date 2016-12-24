'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SidebarModule = require('./SidebarModule');

var _SidebarModule2 = _interopRequireDefault(_SidebarModule);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SidebarModule', function () {
    var component = function component(headerText) {
        return _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(
            _SidebarModule2.default,
            { header: headerText },
            _react2.default.createElement(
                'p',
                null,
                'Some content'
            ),
            _react2.default.createElement(
                'p',
                null,
                'Some more content'
            )
        ));
    };
    var renderedDOM = function renderedDOM(headerText) {
        return _reactDom2.default.findDOMNode(component(headerText));
    };

    it('renders a div parent element with the appropriate class name', function () {
        expect(renderedDOM().tagName).toEqual('DIV');

        expect(renderedDOM().className).toEqual('sidebar-module');
    });

    it('renders all children', function () {
        expect(renderedDOM().children.length).toEqual(2);
    });

    it('renders all child content', function () {
        expect(renderedDOM().children[0].textContent).toEqual('Some content');

        expect(renderedDOM().children[1].textContent).toEqual('Some more content');
    });

    it('renders a header first if specified', function () {
        expect(renderedDOM('Header Text').children[0].tagName).toEqual('H2');
    });
});