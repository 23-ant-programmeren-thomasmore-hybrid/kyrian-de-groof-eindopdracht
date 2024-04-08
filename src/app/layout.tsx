"use client";
import "./globals.css";
import React from "react";
import {useAuth} from "@/context/AuthContext";
import Link from "next/link";
import {AuthProvider} from "@/context/AuthProvider";
import path from "path";
import fs from "fs";

const LOGGEDINUSER = path.resolve('./src/data/loggedInUser.json');

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    const {isLoggedIn} = useAuth();
    console.log(isLoggedIn);
    return (
        <>
            <AuthProvider>
                <header>
                    <nav>
                        <ul className="text-3xl">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/creator">creator</Link>
                            </li>
                        </ul>
                        <ul className="right-4 text-3xl">
                            {isLoggedIn ? (
                                <li>
                                    <Link href="/logout">Logout</Link>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <Link href="/login"> Sign in</Link>
                                    </li>
                                    <li>
                                        <Link href="/register"> Sign up</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </header>
                <main>{children}</main>
            </AuthProvider>
        </>

    );
}
