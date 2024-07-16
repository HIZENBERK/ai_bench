import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        empNo: null,
        username: null,
        job: '',
        position: '',
    });

    const login = (empNo, username, job, position) => {
        setAuthState({
            isAuthenticated: true,
            empNo,
            username,
            job,
            position,
        });
    };

    const logout = () => {
        setAuthState({
            isAuthenticated: false,
            empNo: null,
            username: null,
            job: '',
            position: '',
        });
    };

    const [LogoutSuccess, setLogoutSuccess] = useState('');

    return (
        <AuthContext.Provider value={{ authState, login, logout, LogoutSuccess, setLogoutSuccess }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
