"use client";
import "./globals.css";
import React from "react";
import {useAuth} from "@/context/AuthContext";
import Link from "next/link";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>

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
                </nav>
            </header>
            <main>{children}</main>

        </>

    );
}
