"use client";

import {useAuth} from "@/context/AuthContext";

export async function firstvisit() {
    const isFirstTime = localStorage.getItem('isFirstTime');
    if (!isFirstTime) {
        const response = fetch('@/api/auth/logout');
        localStorage.setItem('isFirstTime', 'true');
        const {logout} = useAuth();
        logout();
    }
}