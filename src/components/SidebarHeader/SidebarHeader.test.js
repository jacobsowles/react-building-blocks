import React from 'react';
import { findDOMNode } from 'react-dom';
import SidebarHeader from './SidebarHeader';
import TestUtils from 'react-addons-test-utils';

describe('SidebarHeader', () => {
    const component = TestUtils.renderIntoDocument(
        <SidebarHeader>
            <a href="/">Site Title</a>
        </SidebarHeader>
    );
    const renderedDOM = () => findDOMNode(component);

    it('renders a header element with the appropriate class name', () => {
        expect(renderedDOM().tagName)
            .toEqual('HEADER');

        expect(renderedDOM().className)
            .toEqual('sidebar-header');
    });

    it('renders children', () => {
        expect(renderedDOM().children[0].tagName)
            .toEqual('A');
    });
});
