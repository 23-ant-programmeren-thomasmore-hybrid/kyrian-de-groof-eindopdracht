import {useRouter} from "next/router";
import {useState} from "react";


export default function Creator() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        nickname: '',
        age: '',
        job: '',
        forceSensitive: '',
        species: '',
        homeWorld: '',
        weapon: '',
        affiliation: '',
        allignment: '',
        title: '',
        backstory: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/characterPush', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                await router.push('/');
                console.log('Form submitted successfully');
            } else {
                console.error('Error submitting form data:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-black">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
                <form onSubmit={handleSubmit} className="w-full text-black">
                    <input type="hidden" name="userId" value={0}/>
                    <div className="mb-4">
                        <label className="block mb-2">
                            Name
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2">
                            Nickname
                            <input
                                type="text"
                                name="nickname"
                                value={formData.nickname}
                                onChange={handleChange}
                                placeholder="Nickname"
                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2">
                            Age
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                placeholder="Age"
                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2">
                            Job
                            <input
                                type="text"
                                name="job"
                                value={formData.job}
                                onChange={handleChange}
                                placeholder="Job"
                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </label>
                    </div>

                    <div className="mb-4">
                        Force Sensitive
                        <label className="block mb-2">
                            <span className="mb-2 text-black">Yes </span>
                            <input
                                type="radio"
                                name="forceSensitive"
                                value="Yes"
                                onChange={handleChange}
                                className="mr-2"
                            />
                        </label>
                        <label className="block mb-2">
                            <span className="mb-2 text-black">No </span>
                            <input
                                type="radio"
                                name="forceSensitive"
                                value="No"
                                onChange={handleChange}
                                className="mr-2"
                            />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2">
                            Species
                            <input
                                type="text"
                                name="species"
                                value={formData.species}
                                onChange={handleChange}
                                placeholder="Species"
                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2">
                            Home World
                            <input
                                type="text"
                                name="homeWorld"
                                value={formData.homeWorld}
                                onChange={handleChange}
                                placeholder="Home World"
                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2">
                            Weapon
                            <input
                                type="text"
                                name="weapon"
                                value={formData.weapon}
                                onChange={handleChange}
                                placeholder="Weapon"
                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2">
                            Affiliation
                            <input
                                type="text"
                                name="affiliation"
                                value={formData.affiliation}
                                onChange={handleChange}
                                placeholder="Affiliation"
                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2">
                            Allignment
                            <input
                                type="text"
                                name="allignment"
                                value={formData.allignment}
                                onChange={handleChange}
                                placeholder="Allignment"
                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2">
                            Title
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Title"
                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2">
                            Backstory
                            <textarea
                                name="backstory"
                                value={formData.backstory}
                                onChange={handleChange}
                                placeholder="Backstory"
                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </main>
    );
}