// PrivateRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../component/AuthContext';

const PrivateRoute = ({ component: Component, allowedJobs, allowedPositions, ...rest }) => {
    const { authState } = useAuth();
    const userJob = authState.job;
    const userPosition = authState.position;

    // 접근 허용 조건 확인
    const isAllowed =
        (allowedJobs.includes(userJob) || allowedJobs.includes('*')) &&
        (allowedPositions.includes(userPosition) || allowedPositions.includes('*'));

    return (
        <Route
            {...rest}
            render={(props) =>
                isAllowed ? <Component {...props} /> : <Redirect to="/access-denied" />
            }
        />
    );
};

export default PrivateRoute;
