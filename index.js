// TASK MANAGER

let taskId = 1;

// taskManager object
const taskManager = {
  tasks: [],
  addTask: function () {
    // how to get the description of the task from the user?
    const taskDescription = prompt("Please add task description: ");
    //console.log("task description: " + taskDescription);

    // is there anything that can go wrong with input from the user?
    // we want to make sure that the user does not add an empty string
    if (taskDescription.trim() === "") {
      alert("Task description can not be empty!");
      this.addTask();
    }

    // define the task object
    const task = {
      id: taskId++,
      description: taskDescription,
      // you need to change the empty string to a variable, probably the variable where you store the input user
      complete: false,
    };

    // how do we add the task object onto the tasks array?
    this.tasks.push(task);

    alert("Task added!");
    // do we want our program to shut down or continue showing the menu?
    menu();
  },

  listAllTasks: function () {
    // what if there is no tasks in the array?

    // we need to show each task in the tasks array in some kind of message

    // how can we show or do something with each element in an array?
    // we need to loop through it in orde to show or do something with each element in the array
    let message = "";
    this.tasks.forEach((task) => {
      // in here we can do something with each task in our tasks array
      message +=
        "Id: " +
        task.id +
        " Description: " +
        task.description +
        " Complete: " +
        task.complete +
        "\n";
    });

    alert(message);
    menu();
  },
};

function menu() {
  const choice = parseInt(
    prompt(
      "Select a choice:\n1) Add task\n2) Complete task\n3) List all tasks\n4) List completed tasks\n5) Exit"
    )
  );

  //console.log(choice);

  // switch or if/else?
  switch (choice) {
    case 1:
      taskManager.addTask();
      break;
    case 2:
      // just verifying that we can add a task to our tasks array
      console.log(taskManager.tasks);
      break;
    case 3:
      taskManager.listAllTasks();
      break;
    case 4:
      console.log("case 4");
      break;
    case 5:
      alert("Goodbye!");
      return;
    default:
      alert("Invalid input, please choose between 1 -5");
      menu();
      break;
  }
}

menu();