// pages/api/users.js

import fs from 'fs';
import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    process.env.KV_REST_API_URL = "https://included-tetra-46686.upstash.io";
    process.env.KV_REST_API_TOKEN = "AbZeASQgY2MxMDQwMzEtODY0Mi00NzVjLWIwZWMtOWRjNzYyODI3ODA0ODc3ZWEyOTk2ZTA4NDEyZThiZTgyYjNhNmM2ZmFjNDQ=";
    if (req.method === 'GET') {
        try {
            // Fetch users from kv.lrange
            const users = await kv.lrange("person", 0, -1);

            // Write users data to a file
            fs.writeFile('src/data/data.json', JSON.stringify(users), (err) => {
                if (err) {
                    console.error('Error writing users data:', err);
                    res.status(500).json({ error: 'Error writing users data' });
                } else {
                    res.status(200).json({ message: 'Users data written successfully' });
                    console.log('Users data written successfully');
                }
            });
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ error: 'Error fetching users' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
        console.error('Method Not Allowed');
    }
}
