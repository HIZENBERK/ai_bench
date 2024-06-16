import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element: Component, allowedJobs, allowedPositions, ...rest }) => {
    const { authState } = useAuth();
    const job = authState.job;
    const position = authState.position;
    console.log(authState);
    console.log(job, position);

    const isAllowed =
        (allowedJobs.includes(job) || allowedJobs.includes('*')) &&
        (allowedPositions.includes(position) || allowedPositions.includes('*'));

    if (!authState.isAuthenticated) {
        return <Navigate to="/" />;
    }

    return isAllowed ? <Component {...rest} /> : <Navigate to="/access-denied" />;
};

export default PrivateRoute;
