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

$(document).ready(function() {
  $('.add').click(function(event) {
  	var div= document.getElementsByClassName("task-content")
  	var divLate = div[div.length - 1];
    $(".build-list").append(divLate);
  });
});

// var add = document.querySelector(".add");
// var addTask = function(item) {
// 	item.addEventListener("click", function() {
// 		var div = document.createElement('div');
// 		div.className = "task-content"
// 		document.body.appendChild(div);
// 		div.innerHTML = "hello my name is Neeraj";
// 	});
// }

// addTask(add);
// //create a function that will create a new item in the task list
// //function will 
// 	//add an event listener to the add button
// 		//upon a click
// 			//value of input in add line will become innerHTML to a new task in list, right after last one




