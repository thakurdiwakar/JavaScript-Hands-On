const inp = document.getElementById("inp");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Add an event listener to the button
addTaskButton.addEventListener("click", function () {
  // Get the value from the input
  const newTaskText = inp.value;

  // Create a new list item element
  const newTaskItem = document.createElement("li");
  newTaskItem.textContent = newTaskText;

  // Append the new list item to the task list
  taskList.appendChild(newTaskItem);

  // Clear the input field
  inp.value = "";
});
