import React from 'react';
import { findDOMNode } from 'react-dom';
import PageSubtitle from './PageSubtitle';
import TestUtils from 'react-addons-test-utils';

describe('PageSubtitle', () => {
    const component = TestUtils.renderIntoDocument(<PageSubtitle>Some description of the page</PageSubtitle>);
    const renderedDOM = () => findDOMNode(component);

    it('renders a paragraph element with the appropriate class name', () => {
        expect(renderedDOM().tagName)
            .toEqual('P');

        expect(renderedDOM().className)
            .toEqual('page-subtitle');
    });

    it('renders the appropriate text', () => {
        expect(renderedDOM().textContent)
            .toEqual('Some description of the page');
    });
});
