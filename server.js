const express = require('express');
require('dotenv').config();

// constants
const app = express();
const PORT = 3000;
const cors = require("cors");
const mongoose = require("mongoose");


// Controllers
const teamCreationRouter = require('./Controllers/teamCreationController');
const dashBoardRouter = require('./Controllers/dashBoardController');
const confirmationRouter = require('./Controllers/confirmationController');
const userRouter = require('./Controllers/userController');
const tournamentDetailsRouter = require('./Controllers/tournamentDetailsController');





// MONGODB Connection
// Connection URL
const URI = process.env.MONGO_URI;

// Connect to the MongoDB server
mongoose.connect(URI)
  .then(() => {
    console.log("MongoDB connected",)
  })
  .catch((err) => {
    console.log("Error occured connecting to MongoDB", err);
  })



// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());


app.use("/api/gk", teamCreationRouter);
app.use("/api/gk", dashBoardRouter);
app.use("/api/gk", confirmationRouter);
app.use("/api/gk", userRouter);
app.use("/api/gk", tournamentDetailsRouter);

// Routes
app.listen(PORT, (req, res) => {
  console.log(`Server running on port http://localhost:${PORT}`)
})




