import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
    const {login} = useAuth();
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [error, setError] = useState('');

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/login', {
                method: 'POST', // Change method to POST
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                login();
                console.log('Login successful');
                await router.push('/');
            } else {
                const data = await response.json();
                setError(data.error);
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2">
                            Username
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Username"
                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block mb-2">
                            Password
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-gray-700"
                            />
                        </label>
                    </div>
                    {error && (
                        <div className="col-span-2 text-red-500">{error}</div>
                    )}
                    <div className="col-span-2">
                        <button
                            type="submit"
                            className="w-full p-2 bg-indigo-500 text-white rounded-md focus:outline-none"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
