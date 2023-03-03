const express = require("express");
const admin = require("firebase-admin");
const serviceAccount = require("./pomoduo-timer-firebase-adminsdk-jc991-c836748f94.json");

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

app.use(express.json());

// Add a new document to the "rooms" collection
app.post("/createRoom", (req, res) => {
  const roomCode = req.body.roomCode;

  // Create a new room document in the database with the given room code
  const roomRef = db.collection("rooms").doc(roomCode);
  roomRef
    .set({
      users: [],
    })
    .then(() => {
      console.log(`Room ${roomCode} created`);
      res.send("Room created");
    })
    .catch((error) => {
      console.error("Error creating room", error);
      res.status(500).send("Error creating room");
    });
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
