const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

// Initialize the Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json'); // Path to your service account key
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();
app.use(bodyParser.json());

// Endpoint to store user data
app.post('/storeUserData', async (req, res) => {
    const { email, uid } = req.body;

    if (!email || !uid) {
        return res.status(400).send('Email and UID are required');
    }

    const userData = {
        email: email,
        uid: uid,
        lastLogin: admin.firestore.FieldValue.serverTimestamp()
    };

    try {
        await db.collection('users').doc(uid).set(userData);
        res.status(200).send('User data stored successfully');
    } catch (error) {
        console.error('Error storing user data:', error);
        res.status(500).send('Error storing user data: ' + error.message);
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
