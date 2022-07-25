import { projectArray } from ".";

const taskEvents = () => {
  const addTaskBtn = document.getElementById("addTask");
  addTaskBtn.addEventListener("click", showTaskForm);

  const cancelTaskBtn = document.getElementById("taskCancelBtn");
  cancelTaskBtn.addEventListener("click", hideTaskForm);

  const submitTaskBtn = document.getElementById("taskSubmitBtn");
  submitTaskBtn.addEventListener("click", (e) => {
    console.log("submitted");
    e.preventDefault();
    addTasktoTaskListArray();
    console.log(projectArray[0].taskList);
  });
};

let id = 0;
let times = 0;
const addTasktoTaskListArray = () => {
  const title = document.getElementById("taskTitle").value;
  const checkbox = document.getElementById("checkboxID").value;
  const details = document.getElementById("taskDetails").value;
  const date = document.getElementById("Date").value;
  const dataId = getDataID();
  const taskID = id;
  const newTask = createTask(checkbox, title, details, date, taskID);
  projectArray[0].taskList.push(newTask);
  addTaskToDom(checkbox, title, details, date, taskID);
  id++;
  console.log(times + "times");
  times++;
};

const addTaskToDom = (checkbox, title, details, date, taskID) => {
  const tasks = document.querySelector(".tasks");

  const li = document.createElement("li");

  const checkBoxDiv = document.createElement("div");
  checkBoxDiv.classList.add("checkbox");
  const checkboxEle = document.createElement("input");
  checkboxEle.type = "checkbox";
  checkboxEle.value = checkbox;
  checkBoxDiv.appendChild(checkboxEle);

  const listDetails = document.createElement("div");
  listDetails.classList.add("list-details");

  const taskTitle = document.createElement("div");
  taskTitle.classList.add("task-title");
  taskTitle.textContent = "" + title;
  listDetails.appendChild(taskTitle);

  const taskDetails = document.createElement("div");
  taskDetails.classList.add("task-details");
  taskDetails.textContent = details;
  listDetails.appendChild(taskDetails);

  li.dataset.task = taskID;

  li.appendChild(checkBoxDiv);
  li.appendChild(listDetails);

  tasks.appendChild(li);
};

const createTask = (checkbox, title, details, date, id) => {
  return { checkbox, title, details, date, id };
};

const showTaskForm = () => {
  const form = document.getElementById("taskForm");
  form.classList.remove("hide");
};

const hideTaskForm = () => {
  const form = document.getElementById("taskForm");
  form.classList.add("hide");
};
const getDataID = () => {
  const selectedProject = document.querySelector(".selected");
  console.log(selectedProject.dataset.project);

  return selectedProject.dataset.project;
};
export { taskEvents, getDataID };
