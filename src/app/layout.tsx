"use client";
import "./globals.css";
import React from "react";
import {useAuth} from "@/context/AuthContext";
import Link from "next/link";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    const {isLoggedIn} = useAuth();
    return (
        <html lang="en">
        <body>
        <header>
            <nav>
                <ul className="text-3xl">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/creator">About</Link>
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
                                <Link href="/login">Login</Link>
                            </li>
                            <li>
                                <Link href="/register">Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
        <main>{children}</main>
        </body>
        </html>
    );
}
