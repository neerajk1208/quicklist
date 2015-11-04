var tasks = document.getElementsByClassName("task-content");
var activities = document.getElementsByClassName("task");
var inputs = document.getElementsByTagName("input") 
var dones = document.getElementsByClassName("done");

var highlightText = function(taskContent, task, input) {
	taskContent.addEventListener("click", function() {
		task.className = "task edit";
		input.setSelectionRange(0, input.value.length)
	});
}

var removeEdit = function(taskContent, task, input) {
	input.addEventListener("blur", function() {
		task.className ="task";
		taskContent.className = "task-content";
		taskContent.innerHTML = input.value || "1st Priority";
	})
}

var taskComplete = function(done, taskContent) {
	done.addEventListener("click", function() {
		taskContent.className = "task-content completed";
	})
}

for (var i = 0; i<tasks.length; i++) {
	highlightText(tasks[i], activities[i], inputs[i]);
	removeEdit(tasks[i], activities[i], inputs[i]);
	taskComplete(dones[i], tasks[i]);
};


var add = document.querySelector(".add");
var addTask = document.querySelector(".write-task")
console.log(addTask)
add.addEventListener("click", function() {
		//create a div
		var newElement = document.createElement("div");
		//add the classname task to the div
		newElement.className = "task";
		//create a span
		var doneSpan = document.createElement("span");
		//add classname done and innerHTML done to the span
		doneSpan.className = "done";
		doneSpan.innerHTML = "Done";
		//add another span
		var taskDetails = document.createElement("span");
		//add classname and innerhtml to this span as well
		taskDetails.className = "task-content";
		taskDetails.innerHTML = addTask.value;
		//add first span and second span to the newelement
		$(newElement).append(doneSpan);
		$(newElement).append(taskDetails);
		$(".list").append(newElement);
	})


