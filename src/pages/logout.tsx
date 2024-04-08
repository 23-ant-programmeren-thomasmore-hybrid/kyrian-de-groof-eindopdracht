import {useState} from "react";
import {useAuth} from "@/context/AuthContext";
import {useRouter} from "next/router";


export default function Logout() {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const {logout} = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        setLoggedInUser(null);
        logout();
        await fetch('/api/auth/logout');
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
                <h1 className="text-2xl font-semibold text-center">Are you sure you want to logout?</h1>
                <button onClick={handleLogout} className="block w-full mt-4 p-2 bg-red-500 text-white rounded-md">Logout</button>
                <button onClick={() => router.push('/')} className="block w-full mt-4 p-2 bg-blue-500 text-white rounded-md">Cancel</button>
            </div>
        </main>
    );
}