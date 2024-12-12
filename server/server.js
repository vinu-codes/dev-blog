const express = require("express");
const { connectToDb, getDb } = require("./db");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config({ path: "./.env" });
const PORT = 3001;

console.log("MONGODB_URI:", process.env.MONGODB_URI);

// db connection object
let db;
connectToDb((err) => {
  if (!err) {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    db = getDb();
  } else {
    console.log(err);
  }
});

// routes
app.get("/blog", async (req, res) => {
  try {
    const payload = await db.collection("comments").find().toArray();
    console.log(payload);
    res.send({ msg: "Welcome to the API", payload });
  } catch (error) {
    console.error("Error fetching comments:", error);
    res
      .status(500)
      .json({ msg: "Internal Server Error", error: error.message });
  }
});
