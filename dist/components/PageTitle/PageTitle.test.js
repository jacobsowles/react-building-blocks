'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _PageTitle = require('./PageTitle');

var _PageTitle2 = _interopRequireDefault(_PageTitle);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('PageTitle', function () {
    var component = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(
        _PageTitle2.default,
        null,
        'Page Title'
    ));
    var renderedDOM = function renderedDOM() {
        return (0, _reactDom.findDOMNode)(component);
    };

    it('renders a header element with the appropriate class name', function () {
        expect(renderedDOM().tagName).toEqual('H1');

        expect(renderedDOM().className).toEqual('page-title');
    });

    it('renders the appropriate text', function () {
        expect(renderedDOM().textContent).toEqual('Page Title');
    });
});