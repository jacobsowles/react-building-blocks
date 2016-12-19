// npm modules
import React, { Component } from 'react';
import { render } from 'react-dom';

// app modules
import Sidebar from '../src/components/Sidebar/Sidebar';
import SidebarModule from '../src/components/SidebarModule/SidebarModule';

class App extends Component {
    render() {
        return (
            <Sidebar>
                <SidebarModule header="Paragraph Content">
                    <p>Donec ipsum dolor, iaculis ac ipsum eget, rhoncus maximus urna</p>
                </SidebarModule>

                <SidebarModule header="List Content">
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>dolor sit amet</li>
                        <li>consectetur adipiscing elit</li>
                    </ul>
                </SidebarModule>
            </Sidebar>
        );
    }
}

render(<App />, document.querySelector('#app'));
