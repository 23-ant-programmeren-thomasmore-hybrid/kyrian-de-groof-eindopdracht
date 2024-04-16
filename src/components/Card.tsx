import React from 'react';
import Link from "next/link";

// @ts-ignore
const Card = ({ character }) => {
    return (
        <div className="text-black bg-white m-2 rounded-lg shadow-md p-4 border-2 border-amber-950">
            <h2 className="text-xl font-bold">{character.name}</h2>
            <p className="text-gray-600">{character.nickname}</p>
            <p className="text-gray-700">{character.affiliation}</p>
            <Link className="right-1" href={'/characters/'+ character.id}>
                <p className="button">More</p>
            </Link>
        </div>
    );
};

export default Card;
