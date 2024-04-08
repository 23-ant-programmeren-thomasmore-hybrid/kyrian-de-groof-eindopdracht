import {kv} from "@vercel/kv";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
    process.env.KV_REST_API_URL = "https://included-tetra-46686.upstash.io";
    process.env.KV_REST_API_TOKEN = "AbZeASQgY2MxMDQwMzEtODY0Mi00NzVjLWIwZWMtOWRjNzYyODI3ODA0ODc3ZWEyOTk2ZTA4NDEyZThiZTgyYjNhNmM2ZmFjNDQ=";
    if (req.method === 'GET') {
        try {
            // Fetch characters.json from kv.lrange
            const characters = await kv.lrange("character", 0, -1);

            // Write characters.json data to a file
            fs.writeFile(path.join('/tmp', 'characters.json'), JSON.stringify(characters), (err) => {
                if (err) {
                    console.error('Error writing characters data:', err);
                    res.status(500).json({ error: 'Error writing characters data' });
                }
                else {
                    res.status(200).json({ message: 'Characters data written successfully' });
                    console.log('Characters data written successfully');
                }
            });
        } catch (error) {
            console.error('Error fetching characters:', error);
            res.status(500).json({ error: 'Error fetching characters' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
        console.error('Method Not Allowed');
    }
}