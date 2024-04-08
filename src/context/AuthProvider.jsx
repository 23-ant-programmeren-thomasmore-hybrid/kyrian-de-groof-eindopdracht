// AuthProvider.js

import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [loggedInUser, setLoggedInUser] = useState(null);

    const login = async () => {
            const response = await fetch('/api/auth/loggedinfetch');
            if (response.ok) {
                const userData = await response.json();
                setIsLoggedIn(true);
                setLoggedInUser(userData);
                console.log('User data fetched successfully:', userData);
                console.log(loggedInUser);
            } else {
                console.error('Failed to fetch user data:', response.statusText);
            }
    };

    const logout = () => {
        setIsLoggedIn(false);
        setLoggedInUser(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, loggedInUser }}>
            {children}
        </AuthContext.Provider>
    );
};
