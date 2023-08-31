let todo = [];

while (true) {
  let choice = prompt("Enter your choice: ");

  if (choice === "show") {
    if (todo.length === 0) {
      console.log("No tasks to show.");
    } else {
      for (let i = 0; i < todo.length; i++) {
        console.log(i, todo[i]);
      }
    }
  } else if (choice === "add") {
    let addTask = prompt("Enter a task to add:");

    todo.push(addTask);

    console.log("Your task added.");
  } else if (choice === "delete") {
    let ind = parseInt(prompt("Enter the index of the task to delete:"));

    todo.splice(ind, 1);

    console.log("Task Deleted");
  } else if (choice === "quit") {
    console.log("Quitted.");
    break;
  } else {
    console.log("Invalid choice. Please enter 'show', 'add', or 'quit'.");
  }
}
