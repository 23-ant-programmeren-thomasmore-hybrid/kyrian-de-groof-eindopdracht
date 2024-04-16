//[id].tsx
import React from "react";

// @ts-ignore
export default function Character({ character }) {
    return (
        <div className="poster">
<h1>{character.name}</h1>
            <p>{character.nickname}</p>
            <p>{character.affiliation}</p>
            <p>{character.age}</p>
            <p>{character.allignment}</p>
        </div>
    );
}