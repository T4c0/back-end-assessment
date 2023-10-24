const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const { getCompliment, getFortune, getGoals } = require("./controller");

app.set("view engine", "ejs");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/getGoals", getGoals);

app.post("/goals");

app.put("/api/goals/:id");

app.delete("/api/goals/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = goals.findIndex((goal) => goal.id === id);
  
    if (index === -1) {
      res.status(404).json({ error: 'Goal not found' });
    } else {
      goals.splice(index, 1);
      res.json({ message: 'Goal deleted successfully' });
    }
});

app.listen(5500, () => console.log("Server running on 4000"));
