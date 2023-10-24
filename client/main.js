const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("getFortuneButton");
const viewGoalsButton = document.getElementById("viewGoalsButton");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
const getGoals = () => {
    fetch("/api/goals")
    .then((response) => response.json())
    .then((data) => {
      const goalList = document.getElementById("goalList");
      goalList.innerHTML = "";
      data.forEach((goal) => {
        const li = document.createElement("li");
        li.innerHTML = `
                  <span>${goal.text}</span>
                  <button class="delete-button" data-id="${goal.id}">Delete</button>
              `;

        // Event listener to delete a goal
        const deleteGoalButton = li.querySelector(".delete-button");
        deleteGoalButton.addEventListener("click", () => {
          deleteGoal(goal.id);
        });

        goalList.appendChild(li);
      });
    });
};

// Event listener to add a goal
addGoalButton.addEventListener("click", function () {
    const goalText = goalInput.value.trim();
    if (goalText !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
                <span>${goalText}</span>
                <button class="delete-button">Delete</button>
            `;

      // Event listener to delete a goal
      const deleteButton = li.querySelector(".delete-button");
      deleteButton.addEventListener("click", function () {
        goalList.removeChild(li);
      });

      goalList.appendChild(li);
      goalInput.value = "";
    }
  });

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
viewGoalsButton.addEventListener("click", getGoals);
