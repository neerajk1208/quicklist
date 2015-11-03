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


task1.addEventListener("click", function() {
	activity1.className = "task edit";
	input1.setSelectionRange(0, input1.value.length)
});

input1.addEventListener("blur", function() {
	activity1.className ="task";
	task1.className = "task-content";
	task1.innerHTML = input1.value || "1st Priority";
})

done1.addEventListener("click", function() {
	task1.className = "task-content completed";
})


task2.addEventListener("click", function() {
	activity2.className = "task edit";
	input2.setSelectionRange(0, input2.value.length)
});

input2.addEventListener("blur", function() {
	activity2.className ="task";
	task2.className = "task-content";
	task2.innerHTML = input2.value || "2nd Priority";
})

done2.addEventListener("click", function() {
	task2.className = "task-content completed";
})

task3.addEventListener("click", function() {
	activity3.className = "task edit";
	input3.setSelectionRange(0, input3.value.length)
});

input3.addEventListener("blur", function() {
	activity3.className ="task"
	task3.className = "task-content";
	task3.innerHTML = input3.value || "3rd Priority";
})

done3.addEventListener("click", function() {
	task3.className = "task-content completed";
})

console.log("hello")




