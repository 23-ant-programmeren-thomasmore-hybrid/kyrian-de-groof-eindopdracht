import React, { useEffect, useState } from 'react';

export default function Characters() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        load();
    }, []);

    async function load() {
        try {
            const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';
            const response = await fetch(`${baseUrl}/api/characterfetch`);
            if (response.ok) {
                const data = await response.json();
                setUserData(data);
            } else {
                console.error('Failed to fetch character data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching character data:', error);
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-black">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-gray-800">Characters</h1>
                {/* Render the user data here */}
                {userData && (
                    <div>
                        {/* Render your user data here */}
                    </div>
                )}
            </div>
        </main>
    )
}