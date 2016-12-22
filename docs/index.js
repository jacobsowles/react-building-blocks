// npm modules
import React, { Component } from 'react';
import { render } from 'react-dom';
import { hashHistory, Route, IndexRoute, Router } from 'react-router';

// app modules
import Components from 'components/Components';
import Home from 'components/Home';
import Sidebar from 'components/SidebarDocs';
import SidebarModule from 'components/SidebarModuleDocs';
import SidebarModuleHeader from 'components/SidebarModuleHeaderDocs';

class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

render((
    <Router history={hashHistory}>
        <Route component={App} path='/'>
            <IndexRoute component={Home} />
            <Route component={Components} path='components'>
                <Route component={Sidebar} path='sidebar' />
                <Route component={SidebarModule} path='sidebar-module' />
                <Route component={SidebarModuleHeader} path='sidebar-module-header' />
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));
