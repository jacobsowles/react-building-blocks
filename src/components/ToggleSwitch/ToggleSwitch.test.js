import React from 'react';
import ReactDOM from 'react-dom';
import ToggleSwitch from './ToggleSwitch';
import TestUtils from 'react-addons-test-utils';

describe('ToggleSwitch', () => {
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
});
