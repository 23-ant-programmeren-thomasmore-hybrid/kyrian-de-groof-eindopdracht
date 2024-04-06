import fs from 'fs';
import path from 'path';
import { kv } from "@vercel/kv";
import bcrypt from 'bcrypt';

const PERSONS_FILE_PATH = path.resolve('./src/data/userId.json');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, email, password, confirmPassword, firstName, lastName, birthDate, phoneNo } = req.body;

        // Compare password and confirmPassword

        if (!bcrypt.compare(password, confirmPassword)) {
            return res.status(400).json({ success: false, message: 'Passwords do not match' });
        } else {
            // Hash the password
            const encryptedPassword = await bcrypt.hash(password, 10);
            // Read lastUserID from JSON file
            let userData;
            try {
                userData = JSON.parse(fs.readFileSync(PERSONS_FILE_PATH, 'utf8'));
            } catch (error) {
                userData = { lastUserID: 0 }; // Set to default if file doesn't exist or is corrupted
            }

            // Increment userID
            const nextUserID = userData.lastUserID + 1;

            // Construct person string with hashed password
            const personString = `${nextUserID}~${username}~${email}~${firstName} ${lastName}~${encryptedPassword}~${birthDate}~${phoneNo}`;

            // Update JSON file with new lastUserID
            userData.lastUserID = nextUserID;
            fs.writeFileSync(PERSONS_FILE_PATH, JSON.stringify(userData, null, 2));

            // Respond to request
            res.status(200).json({ success: true, message: 'Person added successfully' });

            // Push person data to KV store
            await kv.lpush("person", personString);
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
