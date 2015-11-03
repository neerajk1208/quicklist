var tasks = document.getElementsByClassName("task-content");

var task1 = tasks[0];
var task2 = tasks[1];
var task3 = tasks[2];

var activities = document.getElementsByClassName("task");

var activity1 = activities[0];
var activity2 = activities[1];
var activity3 = activities[2];

var inputs = document.getElementsByTagName("input") 

var input1 = inputs[0];
var input2 = inputs[1];
var input3 = inputs[2];

var dones = document.getElementsByClassName("done");

var done1 = dones[0];
var done2 = dones[1];
var done3 = dones[2];

console.log(dones)

var highlightText = function(taskContent, task, input) {
	taskContent.addEventListener("click", function() {
		task.className = "task edit";
		input.setSelectionRange(0, input.value.length)
	});
}

highlightText(task1, activity1, input1);
highlightText(task2, activity2, input2);
highlightText(task3, activity3, input3);

var removeEdit = function(taskContent, task, input) {
	input.addEventListener("blur", function() {
		task.className ="task";
		taskContent.className = "task-content";
		taskContent.innerHTML = input.value || "1st Priority";
	})
}

removeEdit(task1, activity1, input1);
removeEdit(task2, activity2, input2);
removeEdit(task3, activity2, input3);

var taskComplete = function(done, taskContent) {
	done.addEventListener("click", function() {
		taskContent.className = "task-content completed";
	})
}

taskComplete(done1, task1);
taskComplete(done2, task2);
taskComplete(done3, task3);





