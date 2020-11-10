import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UserList from '../pages/UserList';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={UserList} />
  </Switch>
);

export default Routes;
