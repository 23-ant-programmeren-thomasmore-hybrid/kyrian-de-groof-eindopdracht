import React from "react";
import { useRouter } from "next/router";

// @ts-ignore
export default function Character() {
    const router = useRouter();
    const character = router.query.character;

    // Parse character object if available
    const parsedCharacter = Array.isArray(character) ? JSON.parse(character[0]) : JSON.parse(character || "null");

    return (
        <div className="bg-gray-200 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            {parsedCharacter && (
                <div className="max-w-7xl mx-auto overflow-hidden rounded-lg shadow-xl bg-white">
                    <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900 sm:col-span-2">Character Details</h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{parsedCharacter.name}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Nickname</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{parsedCharacter.nickname}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Affiliation</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{parsedCharacter.affiliation}</dd>
                            </div>
                            {/* Add other details here */}
                            {/* For example: */}
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Job</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{parsedCharacter.job}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Force Sensitive</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{parsedCharacter.forceSensitive ? "Yes" : "No"}</dd>
                            </div>
                            {/* Add more fields as needed */}
                        </dl>
                    </div>
                </div>
            )}
        </div>
    );
}
