import React from 'react';
import ReactDOM from 'react-dom';
import SidebarModule from './SidebarModule';
import TestUtils from 'react-addons-test-utils';

describe('SidebarModule', () => {
    const component = (headerText) => TestUtils.renderIntoDocument(
        <SidebarModule header={headerText}>
            <p>Some content</p>
        </SidebarModule>
    );
    const renderedDOM = (headerText) => ReactDOM.findDOMNode(component(headerText));

    it('renders a div parent element with the appropriate class name', () => {
        expect(renderedDOM().tagName)
            .toEqual('DIV');

        expect(renderedDOM().className)
            .toEqual('sidebar-module');
    });

    it('renders header', () => {
        expect(renderedDOM('Header Text').children[0].tagName)
            .toEqual('H6');
    });

    it('renders child content', () => {
        expect(renderedDOM('Header Text').children[1].tagName)
            .toEqual('P');
    });
});
