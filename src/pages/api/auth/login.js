import path from "path";
import fs from "fs";
import bcrypt from "bcrypt";

const USERS_FILE_PATH = path.resolve('./src/data/data.json');
const LOGGEDINUSER = path.resolve('./src/data/loggedInUser.json')

export default async function handler(req, res) {
    if (req.method === 'POST') { // Change method to POST
        try {
            const { username, password } = req.body; // Access data from request body
            // Read users data from file
            const jsonData = fs.readFileSync(USERS_FILE_PATH, 'utf8');
            const users = JSON.parse(jsonData);

            // Find the data string that contains the provided username
            const user = users.find(dataString => {
                const uNameCheck = dataString.split('~')[1]; // Extract username from the data string
                return uNameCheck === username;
            });

            // Check if the user exists
            if (!user) {
                res.status(404).json({ error: 'User not found' });
                console.error('User not found');
                return res.status(404).json({ error: 'User not found' });
            }

            const userObj = {
                id: user.split('~')[0],
                username: user.split('~')[1],
                email: user.split('~')[2],
                Name: user.split('~')[3],
                password: user.split('~')[4],
                birthDate: user.split('~')[5],
                phoneNo: user.split('~')[6]
            };

            // Check if the password is correct
            if (!(await bcrypt.compare(password, userObj.password))) {
                res.status(401).json({ error: 'Incorrect password' });
                console.error('Incorrect password');
                return res.status(401).json({ error: 'Incorrect password' });
            }

            // Respond with the user data
            res.status(200).json(userObj);
            fs.writeFile(LOGGEDINUSER, JSON.stringify(userObj), (err) => {
                if (err) {
                    console.error('Error writing users data:', err);
                    res.status(500).json({ error: 'Error writing users data' });
                } else {
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
