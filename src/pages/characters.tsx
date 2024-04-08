export default async function Characters() {
    await load();

    return (
        <main className="flex min-h-screen items-center justify-center bg-black">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-gray-800">Characters</h1>

            </div>
        </main>
    )
}

async function save() {
    try {
        const response = await fetch('/api/characterget');
        if (response.ok) {
            const data = await response.json();
            return { userData: data };
        } else {
            console.error('Failed to fetch user data:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }

    return { userData: null };
}

async function load() {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';
        const response = await fetch(`${baseUrl}/api/characterfetch`);
        if (response.ok) {
            const data = await response.json();
            return { userData: data };
        } else {
            console.error('Failed to fetch character data:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching character data:', error);
    }
    return { userData: null };
}