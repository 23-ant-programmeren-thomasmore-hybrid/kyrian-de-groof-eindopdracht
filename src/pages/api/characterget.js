import path from "path";
import fs from "fs";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const jsonData = fs.readFileSync(path.join('/tmp','characters.json'), 'utf8');
            const characters = JSON.parse(jsonData);
            console.log('Characters:', characters);
            if (!characters) {
                res.status(404).json({ error: 'Characters not found' });
                console.error('Characters not found');
                return res.status(404).json({ error: 'Characters not found' });
            }
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
            fs.writeFile(path.join('/tmp','characters.json'), JSON.stringify(charactersObj), (err) => {
                if (err) {
                    console.error('Error writing characters data:', err);
                    res.status(500).json({ error: 'Error writing characters data' });
                } else {
                    console.log('Characters data written successfully');
                }
            });
        }
        catch (error) {
            console.error('Error fetching characters:', error);
            res.status(500).json({ error: 'Error fetching characters' });
        }
    }
    else {
        res.status(405).json({ error: 'Method Not Allowed' });
        console.error('Method Not Allowed');
    }
}