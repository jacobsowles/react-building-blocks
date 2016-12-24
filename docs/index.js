// npm modules
import React, { Component } from 'react';
import { render } from 'react-dom';
import { hashHistory, Route, IndexRoute, Router } from 'react-router';

// app modules
import Components from 'components/Components';
import Home from 'components/Home';
import PageSubtitle from 'components/PageSubtitleDocs';
import PageTitle from 'components/PageTitleDocs';
import Sidebar from 'components/SidebarDocs';
import SidebarHeader from 'components/SidebarHeaderDocs';
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
                <Route component={PageSubtitle} path='page-subtitle' />
                <Route component={PageTitle} path='page-title' />
                <Route component={Sidebar} path='sidebar' />
                <Route component={SidebarHeader} path='sidebar-header' />
                <Route component={SidebarModule} path='sidebar-module' />
                <Route component={SidebarModuleHeader} path='sidebar-module-header' />
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));
