const { userGoals } = require("./userGoals");
module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "You will have great success in the near future.",
      "Good things come to those who wait.",
      "An unexpected gift will arrive in your life.",
      "You will find happiness in the little things.",
      "A pleasant surprise is waiting for you.",
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },
  getGoals: (req, res) => {
    res.status(200).send(userGoals);
  },
  addGoals: (req, res) => {
    const { text } = req.body;
  
    if (text) {
      const newGoal = {
        id: userGoals.length + 1, // Assign a unique ID
        text,
      };
      userGoals.push(newGoal);
      res.json({ success: true, goal: newGoal });
    } else {
      res.status(400).json({ error: "Invalid goal data" });
    }
  },
  deleteGoal: (req, res) => {
    const goalId = req.params.id; // Get the goal ID from the request parameters

    console.log("Request Goal ID:",goalId)
    // Find the index of the goal to delete
    const goalIndex = userGoals.findIndex((goal) => goal.id === goalId);

    if (goalIndex === -1) {
      console.log('Goal not found:',goalId)
      res.status(404).json({ error: "Goal not found" });
    } else {
      // Remove the goal from the userGoals array
      const deletedGoal = userGoals.splice(goalIndex, 1)[0];

      res.json({ success: true, deletedGoal });
    }
  },
};
