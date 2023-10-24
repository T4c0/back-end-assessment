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
    const userGoals = ["Graduate", "Find a job"];
    res.status(200).send(userGoals);
  },
  updateGoal: (req, res) => {
    const goalId = req.params.id;
    const updatedGoal = req.body.updatedGoal;

    // Find and update the goal with the given ID
    const goalToUpdate = userGoals.find((goal) => goal.id === goalId);
    if (goalToUpdate) {
      goalToUpdate.goal = updatedGoal;
      res.status(200).json({ message: "Goal updated successfully" });
    } else {
      res.status(404).json({ message: "Goal not found" });
    }
  },
};
