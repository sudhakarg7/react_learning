import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Home from  './components/home/home'
import Layout from './components/layout/layout'
import Profile from './components/profile/profile';
import Login from './components/login/login';

function App() {
  return (
    <Layout>
      <Switch>
      <Route exact path = '/' component = {Login} />

          <Route exact path = '/home' component = {Home} />
            <Route path="/profile" component = {Profile} />
  
      </Switch>
    </Layout>
  );
}

export default App;
