'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Icon', function () {
    var component = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(_Icon2.default, { glyph: 'bars', onClick: function onClick() {} }));
    var renderedDOM = function renderedDOM() {
        return _reactDom2.default.findDOMNode(component);
    };

    it('renders an aside parent element with the appropriate class name', function () {
        expect(renderedDOM().tagName).toEqual('I');

        expect(renderedDOM().className).toMatch('icon');
    });

    it('renders the correct Font Awesome glyph', function () {
        expect(renderedDOM().className).toMatch('fa fa-bars');
    });
});