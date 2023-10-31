const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("getFortuneButton");
const addGoalButton = document.getElementById("addGoalButton");

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

// Event listener to add a goal
const addGoal = () => {
  const goalText = goalInput.value.trim();

  if (goalText !== "") {
    axios
      .post("http://localhost:4000/api/goals", { text: goalText })
      .then((response) => {
        const newGoal = response.data.goal;
        const li = document.createElement("li");
        li.innerHTML = `
          <span>${newGoal.text}</span>
          <button class="delete-button" data-goalid="${newGoal.id}">Delete</button>
        `;

        // Event listener to delete a goal
        const deleteButton = li.querySelector(".delete-button");
        deleteButton.addEventListener("click", function () {
          const goalId = deleteButton.getAttribute("data-goalid");
          deleteGoal(goalId, li);
        });

        goalList.appendChild(li);
        goalInput.value = "";
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

function deleteGoal(goalId, listItem) {
  console.log('Goal ID to delete:', goalId);
  const deleteUrl = `http://localhost:4000/api/goals/${goalId}`;
  console.log('DELETE URL:', deleteUrl);
  axios
    .delete(deleteUrl)
    .then(() => {
      // Remove the list item from the UI upon successful deletion
      goalList.removeChild(listItem);
    })
    .catch((error) => {
      console.error(error);
    });
}

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
addGoalButton.addEventListener("click", addGoal);
