import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import SidebarModule from '../SidebarModule/SidebarModule';
import TestUtils from 'react-addons-test-utils';

describe('Sidebar', () => {
    const component = TestUtils.renderIntoDocument(
        <Sidebar>
            <SidebarModule><p>Content</p></SidebarModule>
            <SidebarModule><p>More Content</p></SidebarModule>
        </Sidebar>
    );
    const renderedDOM = () => ReactDOM.findDOMNode(component);

    it('renders an aside parent element with the appropriate class name', () => {
        expect(renderedDOM().tagName)
            .toEqual('ASIDE');

        expect(renderedDOM().className)
            .toEqual('sidebar');
    });

    it('renders all children', () => {
        expect(renderedDOM().children.length)
            .toEqual(2);
    });
});
