import React from 'react';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import Manager from './pages/Manager';

const Nav = () => (
  <ul className="nav nav-pills">
    <li><NavLink exact to='/' activeClassName="active">Home</NavLink></li>
    <li><NavLink to='/search' activeClassName="active">Search</NavLink></li>
    <li><NavLink to='/manager' activeClassName="active">Manager</NavLink></li>
  </ul>
);

const Section = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/search' component={Search}/>
    <Route path='/manager' component={Manager}/>
  </Switch>
);

const Root = () => (
  <root>
    <Nav />
    <Section />
  </root>
);

const App = () => (
  <HashRouter>
    <Root />
  </HashRouter>
);

export default App;