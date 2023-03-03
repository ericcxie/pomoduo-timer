const express = require("express");
const admin = require("firebase-admin");
const serviceAccount = require("./pomoduo-timer-firebase-adminsdk-jc991-c836748f94.json");

const app = express();
const cors = require("cors");
app.use(cors());

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

app.use(express.json());

// Add a new document to the "rooms" collection
app.post("/createRoom", (req, res) => {
  const roomCode = req.body.roomCode;
  const userName = req.body.userName;

  // Create a new room document in the database with the given room code
  const roomRef = db.collection("rooms").doc(roomCode);
  roomRef
    .set({
      users: [
        {
          name: userName,
          joinedAt: new Date(),
        },
      ],
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

// Join functionality
app.post("/joinRoom", async (req, res) => {
  const roomCode = req.body.roomCode;
  const userName = req.body.userName;

  // Check if the room exists
  const roomRef = db.collection("rooms").doc(roomCode);
  const roomSnapshot = await roomRef.get();

  if (!roomSnapshot.exists) {
    res.status(404).send("Room not found");
    return;
  }

  // Add the user to the room
  const users = roomSnapshot.data().users;
  users.push({
    name: userName,
    joinedAt: new Date(),
  });

  await roomRef.update({ users });

  console.log(`User ${userName} joined room ${roomCode}`);
  res.send("Joined room");
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
