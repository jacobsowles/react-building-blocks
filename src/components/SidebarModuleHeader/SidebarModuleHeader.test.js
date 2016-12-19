import React from 'react';
import ReactDOM from 'react-dom';
import SidebarModuleHeader from './SidebarModuleHeader.jsx';
import TestUtils from 'react-addons-test-utils';

describe('SidebarModuleHeader', () => {
    const component = TestUtils.renderIntoDocument(<SidebarModuleHeader>Header</SidebarModuleHeader>);
    const renderedDOM = () => ReactDOM.findDOMNode(component);

    it('renders a header element with the appropriate class name', () => {
        expect(renderedDOM().tagName)
            .toEqual('H2');

        expect(renderedDOM().className)
            .toEqual('sidebar-module-header');
    });

    it('renders the correct text', () => {
        expect(renderedDOM().textContent)
            .toEqual('Header');
    });
});
