// Card.jsx
import React from 'react';
import Link from "next/link";

// @ts-ignore
export default function Card({ character }) {
    return (
        <div className="text-black bg-white m-2 rounded-lg shadow-md p-4 border-2 border-amber-950">
            <h2 className="text-xl font-bold">{character.name}</h2>
            <p className="text-gray-600">{character.nickname}</p>
            <p className="text-gray-700">{character.affiliation}</p>
            <Link href={`/characters/${character.id}`}>
                <a className="button">More</a>
            </Link>
        </div>
    );
};
