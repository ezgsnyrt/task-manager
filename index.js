function askUserName () {
    let userName = prompt("Please enter your name", "");
    let text;

    if (userName == "") {
        alert("User name cannot be empty. Please, enter your name here.");
    } else if (userName.length < 2) {
        alert("Your name should contain at least 2 letters.");
    } else if  (/\d+/.test(userName)) {
        // /\d+/ regular expression was used to check numbers in the string
        alert("Please, enter a valid name. A valid name should only contain letters.")
    } else {
        alert(`Welcome ${userName}!`);
    }
}
askUserName ();

let taskId = 1;

const taskManager = {
    tasks: [],
    addTask: function () {
        const taskDescription = prompt("Please add task description: ");

        if (taskDescription.trim() === "") {
            alert("Task description cannot be empty!");
            this.addTask();
        }

        const task = {
            id: taskId++,
            description: taskDescription,
            completed: false,
        };

        this.tasks.push(task);

        alert("Task added!");
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
        const task = this.tasks.find((task) => task.id === taskId);
        // what if the task id does not exist in tasks array
        if (task === undefined) {
            alert("There is no task with the id provided, please try again!");
            this.completeTask();
        // Note: Undefined objects do not have a property, so it cannot be reached.
        } else if (task.completed === true) {
            alert("The task with the id provided is already completed!");
        } else {
            task.completed = true;
            console.log(task);
            alert("The task with the id provided is completed!");
        }
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

    switch (choice) {
        case 1:
            taskManager.addTask();
            break;
        case 2:
            taskManager.completeTask();
            break;
        case 3:
            taskManager.listAllTasks();
            break;
        case 4:
            taskManager.listCompletedTasks();
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
// switch was preferred as a way of managing complex conditional statements.

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
