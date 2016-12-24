'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _PageSubtitle = require('./PageSubtitle');

var _PageSubtitle2 = _interopRequireDefault(_PageSubtitle);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('PageSubtitle', function () {
    var component = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(
        _PageSubtitle2.default,
        null,
        'Some description of the page'
    ));
    var renderedDOM = function renderedDOM() {
        return (0, _reactDom.findDOMNode)(component);
    };

    it('renders a paragraph element with the appropriate class name', function () {
        expect(renderedDOM().tagName).toEqual('P');

        expect(renderedDOM().className).toEqual('page-subtitle');
    });

    it('renders the appropriate text', function () {
        expect(renderedDOM().textContent).toEqual('Some description of the page');
    });
});