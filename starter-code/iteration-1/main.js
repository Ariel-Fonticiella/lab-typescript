var myTasks = [];
function addTask(task) {
    var result = myTasks.push(task);
    console.log("\n\n      =========== NEW TASK ===========\n      We have inserted the task: " + task + ".\n      And we have a total of this many tasks: " + result + ".\n\n      ");
}
function listAllTasks() {
    console.log("\n\n        Our Array consist of: " + myTasks + "\n\n        ");
    return;
}
function deleteTask(task) {
    console.log("We just deleted a task.");
    var index = myTasks.indexOf(task);
    myTasks.splice(index, 1);
}
addTask("Workout");
addTask("Drink Beer");
addTask("Study");
addTask("Drink Whiskey");
listAllTasks();
deleteTask("Workout");
listAllTasks();
