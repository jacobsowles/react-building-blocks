import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon';
import TestUtils from 'react-addons-test-utils';

describe('Icon', () => {
    const component = TestUtils.renderIntoDocument(<Icon glyph="bars" onClick={() => {}} />);
    const renderedDOM = () => ReactDOM.findDOMNode(component);

    it('renders an aside parent element with the appropriate class name', () => {
        expect(renderedDOM().tagName)
            .toEqual('I');

        expect(renderedDOM().className)
            .toMatch('icon');
    });

    it('renders the correct Font Awesome glyph', () => {
        expect(renderedDOM().className)
            .toMatch('fa fa-bars');
    });

    // TODO: Test click handler
    // TODO: Test that aria-hidden=true when no click handler is provided
    // TODO: Test error when children are provided
});
