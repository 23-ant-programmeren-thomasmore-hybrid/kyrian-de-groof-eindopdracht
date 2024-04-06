import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);

    const login = () => {
        // This code will only run on the client-side
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setLoggedInUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        setLoggedInUser(null);
        localStorage.removeItem('user');
    };

    useEffect(() => {
        login();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};