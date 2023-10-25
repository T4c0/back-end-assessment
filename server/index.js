const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const { getCompliment, getFortune, getGoals, addGoals, deleteGoal } = require("./controller");

app.set("view engine", "ejs");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/goals", getGoals);

// Endpoint to add a new goal
app.post("/api/goals", addGoals);

// Endpoint to delete a goal by ID
app.delete("/api/goals/:id", deleteGoal);

app.listen(4000, () => console.log("Server running on 4000"));
