var btnTask;
btnTask = document.getElementById("btn-task");
btnTask.addEventListener("click", AddNewTask);
function AddNewTask() {
    bootbox.promt("nueva tarea a agregar", function (result) {
        var newli = document.createElement("li");
        newli.appendChild(document.createTextNode(result));
        var ul = document.getElementById("list");
        ul.appendChild(newli);
    })
};