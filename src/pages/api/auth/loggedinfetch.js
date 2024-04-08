import fs from 'fs';
import path from 'path';

const LOGGEDINUSER = path.resolve('./src/data/loggedInUser.json');

export default (req, res) => {
    try {
        const userData = JSON.parse(fs.readFileSync(LOGGEDINUSER, 'utf8'));
        res.status(200).json(userData);
    } catch (error) {
        console.error('Error reading or parsing user data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};