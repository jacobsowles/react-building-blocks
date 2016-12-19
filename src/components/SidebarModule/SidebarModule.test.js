import React from 'react';
import ReactDOM from 'react-dom';
import SidebarModule from './SidebarModule.jsx';
import TestUtils from 'react-addons-test-utils';

describe('SidebarModule', () => {
    const component = (headerText) => TestUtils.renderIntoDocument(
        <SidebarModule header={headerText}>
            <p>Some content</p>
            <p>Some more content</p>
        </SidebarModule>
    );
    const renderedDOM = (headerText) => ReactDOM.findDOMNode(component(headerText));

    it('renders a div parent element with the appropriate class name', () => {
        expect(renderedDOM().tagName)
            .toEqual('DIV');

        expect(renderedDOM().className)
            .toEqual('sidebar-module');
    });

    it('renders all children', () => {
        expect(renderedDOM().children.length)
            .toEqual(2);
    });

    it('renders all child content', () => {
        expect(renderedDOM().children[0].textContent)
            .toEqual('Some content');

        expect(renderedDOM().children[1].textContent)
            .toEqual('Some more content');
    });

    it('renders a header first if specified', () => {
        expect(renderedDOM('Header Text').children[0].tagName)
            .toEqual('H2');
    });
});
