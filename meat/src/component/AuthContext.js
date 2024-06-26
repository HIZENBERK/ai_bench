import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        empNo: null,
        username:null,
    });

    const login = (empNo,username) => {
        setAuthState({
            isAuthenticated: true,
            empNo,
            username,
        });
    };

    const logout = () => {
        setAuthState({
            isAuthenticated: false,
            empNo: null,
        });
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
