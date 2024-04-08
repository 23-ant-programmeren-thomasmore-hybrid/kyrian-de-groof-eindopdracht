export default async function Characters() {

    return (
        <main className="flex min-h-screen items-center justify-center bg-black">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-gray-800">Characters</h1>

            </div>
        </main>
    )
}

export async function save() {
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