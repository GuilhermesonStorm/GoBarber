import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Dashboard from '../pages/Dashboard';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Validation from '../pages/Validation';

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={SignIn} />
        <Route path='/signup' component={SignUp} />

        <Route path='/dashboard' component={Dashboard} isPrivate />
        <Route path='/validation' component={Validation} />
    </Switch>
);

export default Routes;