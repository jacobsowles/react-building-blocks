import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import SidebarModule from '../SidebarModule/SidebarModule';
import TestUtils from 'react-addons-test-utils';

describe('Sidebar', () => {
    const component = TestUtils.renderIntoDocument(
        <Sidebar header={<a href="/">Site Title</a>}>
            <SidebarModule><p>Content</p></SidebarModule>
        </Sidebar>
    );
    const renderedDOM = () => ReactDOM.findDOMNode(component);

    it('renders an aside parent element with the appropriate class name', () => {
        expect(renderedDOM().tagName)
            .toEqual('ASIDE');

        expect(renderedDOM().className)
            .toEqual('sidebar');
    });

    it('renders SidebarHeader', () => {
        expect(renderedDOM().children[0].tagName)
            .toEqual('HEADER');
    });

    it('renders SidebarModule children', () => {
        expect(renderedDOM().children[1].tagName)
            .toEqual('DIV');
    });
});
