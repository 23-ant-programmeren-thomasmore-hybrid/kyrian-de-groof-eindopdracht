import path from "path";
import fs from "fs";
import { kv } from "@vercel/kv";

const CHAR_PATH = path.resolve('./src/data/charId.json');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, nickname, age, job, forceSensitive, species, homeWorld, weapon, affiliation, allignment, title, backstory } = req.body;

        try {
            let charData = {};
            if (fs.existsSync(CHAR_PATH)) {
                charData = JSON.parse(await fs.promises.readFile(CHAR_PATH, 'utf8'));
            }

            const nextCharID = (charData.lastCharID || 0) + 1;

            const charString = `${name}~${nextCharID}~${nickname}~${age}~${job}~${forceSensitive}~${species}~${homeWorld}~${weapon}~${affiliation}~${allignment}~${title}~${backstory}`;

            charData.lastCharID = nextCharID;
            await fs.promises.writeFile(CHAR_PATH, JSON.stringify(charData, null, 2));

            await kv.lpush("character", charString);

            res.status(200).json({ success: true, message: 'Character added successfully' });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
