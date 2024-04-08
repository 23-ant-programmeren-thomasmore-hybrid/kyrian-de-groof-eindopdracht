// AuthContext.jsx
"use client";
import React, {createContext, useContext, useState} from 'react';

export const AuthContext = createContext({
    isLoggedIn: true,
    login: () => {},
    logout: () => {}
});

export const useAuth = () => useContext(AuthContext);
