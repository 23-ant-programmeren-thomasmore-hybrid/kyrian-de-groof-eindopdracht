// AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {}
});

export const useAuth = () => useContext(AuthContext);