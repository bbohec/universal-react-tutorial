import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

import Layout from '../views/Layout.jsx';
import Index from '../views/Index.jsx';
import Menu from '../views/Menu.jsx';
import SearchParameters from '../views/SearchParameters.jsx';
import About from '../views/About.jsx';

module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Menu} />
            <Route path='about' component={About} />
            <Route path='index' component={Index} />
            <Route path='menu' component={Menu} />
            <Route path='searchParameters' component={SearchParameters} />
        </Route>
    </Router>
);
