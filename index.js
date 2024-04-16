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
            completed: false,
        };

        // how do we add the task object onto the tasks array?
        this.tasks.push(task);

        alert("Task added!");
        // do we want our program to shut down or continue showing the menu?
        // menu();
    },
    listAllTasks: function () {
        if (this.tasks.length === 0) {
            alert("there is no task in the list!");
            // menu();
        }

        // how can we show or do something with each element in an array?
        // we need to loop through it in orde to show or do something with each element in the array
        let message = "";
        this.tasks.forEach((task) => {
            // in here we can do something with each task in our tasks array
            message +=
                "* " +
                task.description +
                (task.completed ? " - completed" : " - in progress") +
                "\n";
        });

        alert(message);
        // menu();
    },
    listCompletedTasks: function() {
        const completedTasks = this.tasks.filter((task) => task.completed === true);

        if (completedTasks.length === 0) {
            alert("there are no completed tasks currently!");
            return;
            // menu();
        }

        let message = "";
        completedTasks.forEach((task) => {
            // in here we can do something with each task in our tasks array
            message +=
                "* " +
                task.description +
                "\n";
        });

        alert(message);
    },
    completeTask: function() {
        const taskId = parseInt(prompt("Please enter the task id that you have completed"));
        console.log(`taskId: ${taskId}`);
        const task = this.tasks.find((task) => task.id === taskId)
        // what if the task id does not exist in tasks array
        console.log(task)
        if (task === undefined) {
            alert("there is no task with the id provided, please try again!");
            this.completeTask();
        }

        task.completed = true;
    }
};

function menu() {
    const choice = parseInt(
        prompt(
            `Select a choice:
1) Add task
2) Complete task
3) List all tasks
4) List completed tasks
5) Exit`
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
            alert("Invalid input, please choose between 1 - 5");
            menu();
            break;
    }
}

taskManager.tasks.push({
    id: 1,
    description: "go to shopping",
    completed: false,
});
taskManager.tasks.push({
    id: 2,
    description: "go to the gym",
    completed: false,
});
taskManager.tasks.push({
    id: 3,
    description: "study javascript",
    completed: false,
});
// menu();
