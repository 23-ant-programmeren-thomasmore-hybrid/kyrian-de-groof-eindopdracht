// [id].tsx
import React from "react";
import { useRouter } from "next/router";

// @ts-ignore
export default function Character() {
    const router = useRouter();
    const character = router.query.character;

    // Parse character object if available
    const parsedCharacter = Array.isArray(character) ? JSON.parse(character[0]) : JSON.parse(character || "null");

    return (
        <div className="poster text-black">
            {parsedCharacter && (
                <>
                    <h1>{parsedCharacter.name}</h1> <br/>
                    <span>{parsedCharacter.nickname}</span><br/>
                    <span>{parsedCharacter.affiliation}</span><br/>
                    <span>{parsedCharacter.age}</span><br/>
                    <span>{parsedCharacter.allignment}</span>
                </>
            )}
        </div>
    );
}
