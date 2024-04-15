import {kv} from "@vercel/kv";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            // Fetch characters.json from kv.lrange
            const characters = await kv.lrange("character", 0, -1);
            if (!characters) {
                res.status(404).json({ error: 'Characters not found' });
                console.error('Characters not found');
                return res.status(404).json({ error: 'Characters not found' });
            }
            // Map characters data to an array of objects
            const charactersObj = characters.map(char => {
                return {
                    name: char.split('~')[0],
                    id: char.split('~')[1],
                    nickname: char.split('~')[2],
                    age: char.split('~')[3],
                    job: char.split('~')[4],
                    forceSensitive: char.split('~')[5],
                    species: char.split('~')[6],
                    homeWorld: char.split('~')[7],
                    weapon: char.split('~')[8],
                    affiliation: char.split('~')[9],
                    allignment: char.split('~')[10],
                    title: char.split('~')[11],
                    backstory: char.split('~')[12]
                }
            });

            // give charactersObj to response
            res.status(200).json(charactersObj);
        } catch (error) {
            console.error('Error fetching characters:', error);
            res.status(500).json({ error: 'Error fetching characters' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
        console.error('Method Not Allowed');
    }
}