//[id].tsx
import React from "react";
import { useRouter } from "next/router";

// @ts-ignore
export default function Character() {
    const router = useRouter();
    const { character } = router.query;

    // Parse character object if available
    const parsedCharacter = character ? JSON.parse(character) : null;

    return (
        <div className="poster">
            {parsedCharacter && (
                <>
                    <h1>{parsedCharacter.name}</h1>
                    <p>{parsedCharacter.nickname}</p>
                    <p>{parsedCharacter.affiliation}</p>
                    <p>{parsedCharacter.age}</p>
                    <p>{parsedCharacter.allignment}</p>
                </>
            )}
        </div>
    );
}