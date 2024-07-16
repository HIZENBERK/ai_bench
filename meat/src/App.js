// App.js 또는 라우팅을 담당하는 파일에서
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import IncomingPage from './IncomingPage';
import PrivateRoute from './PrivateRoute'; // PrivateRoute를 임포트

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={LoginComponent} />
                <PrivateRoute path="/incoming" component={IncomingPage} allowedJobs={['WM']} allowedPositions={['M']} />
                <Route path="/access-denied" render={() => <div>Access Denied</div>} />
                <Redirect to="/login" />
            </Switch>
        </Router>
    );
};

export default App;
