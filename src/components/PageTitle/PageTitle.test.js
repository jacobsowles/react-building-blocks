import React from 'react';
import { findDOMNode } from 'react-dom';
import PageTitle from './PageTitle';
import TestUtils from 'react-addons-test-utils';

describe('PageTitle', () => {
    const component = TestUtils.renderIntoDocument(<PageTitle>Page Title</PageTitle>);
    const renderedDOM = () => findDOMNode(component);

    it('renders a header element with the appropriate class name', () => {
        expect(renderedDOM().tagName)
            .toEqual('H1');

        expect(renderedDOM().className)
            .toEqual('page-title');
    });

    it('renders the appropriate text', () => {
        expect(renderedDOM().textContent)
            .toEqual('Page Title');
    });
});
