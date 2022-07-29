import { projectArray } from ".";
import { createTask } from "./factories";
import {
  allTask,
  checkTask,
  deleteTask,
  displayTask,
  formModule,
} from "./displayDOM";
import { localeUpdate } from "./storage";
/*task form button events*/
const taskEvents = () => {
  const addTaskBtn = document.getElementById("addTask");
  addTaskBtn.addEventListener("click", formModule().showTaskForm);

  const cancelTaskBtn = document.getElementById("taskCancelBtn");
  cancelTaskBtn.addEventListener("click", formModule().hideTaskForm);

  const submitTaskBtn = document.getElementById("taskSubmitBtn");
  submitTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTasktoTaskArray();
    console.log(projectArray[getDataID()].taskArray);
  });

  const taskUlDIV = document.querySelector(".tasks");
  taskUlDIV.addEventListener("click", (e) => {
    /*checking the event trigerred on selection*/
    checkEvent(e);
  });
};

/*adding the task to projectArray "taskArray"*/
const addTasktoTaskArray = () => {
  const title = document.getElementById("taskTitle").value;
  //const checkbox = document.getElementById("checkboxID").checked;
  const details = document.getElementById("taskDetails").value;
  const date = document.getElementById("Date").value;
  const dataId = getDataID();
  const taskID = newTaskID();
  const priority = document.getElementById("priority").value;
  let checkbox = false;
  const newTask = createTask(
    title,
    details,
    date,
    taskID,
    priority,
    dataId,
    false
  );
  projectArray[dataId].taskArray.push(newTask);
  localeUpdate();
  addTaskToDom(checkbox, title, details, date, taskID, priority);

  formModule().hideTaskForm();
};

/*adding task to DOM*/
const addTaskToDom = (checkbox, title, details, date, taskID, priority) => {
  /*task  div*/
  const tasks = document.querySelector(".tasks");

  /*making an li element for each tasks*/
  const li = document.createElement("li");
  li.classList.add("task");
  /*checkbox*/
  const checkBoxDiv = document.createElement("div");
  checkBoxDiv.classList.add("checkbox");
  const checkboxEle = document.createElement("input");
  checkboxEle.id = "checkboxID";
  checkboxEle.type = "checkbox";
  checkboxEle.checked = checkbox;
  checkBoxDiv.appendChild(checkboxEle);

  /*list details which is task text */
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

  /*buttons on right side of the task div (delete and date)*/
  const listBtnDiv = document.createElement("div");
  listBtnDiv.classList.add("list-buttons");

  const dateEl = document.createElement("input");
  dateEl.type = "date";
  dateEl.value = date;
  dateEl.readOnly = true;
  listBtnDiv.appendChild(dateEl);

  const deleteBtn = document.createElement("button");
  deleteBtn.id = "delete";

  deleteBtn.classList.add("fa-solid");
  deleteBtn.classList.add("fa-trash-can");
  listBtnDiv.appendChild(deleteBtn);

  if (priority === "low") li.classList.add("low");
  if (priority === "med") li.classList.add("med");
  if (priority === "high") li.classList.add("high");

  li.dataset.task = taskID;

  /*appending all the divs to li*/
  li.appendChild(checkBoxDiv);
  li.appendChild(listDetails);
  li.appendChild(listBtnDiv);

  /*appending li to task div*/
  tasks.appendChild(li);
};

/*getting  unique taskID for each parentArray(project)*/
const newTaskID = () => {
  let id = projectArray[getDataID()].taskArray.length;
  return id;
};
const checkEvent = (e) => {
  if (e.target.id === "delete") {
    deleteTask(
      getDataID(),
      e.target.parentNode.parentNode.getAttribute("data-task")
    );
  }
  if (e.target.id === "checkboxID") {
    checkTask(
      getDataID(),
      e.target.parentNode.parentNode.getAttribute("data-task")
    );
  }
};

/*getting the selected project data id "data-project"*/
const getDataID = () => {
  const selectedProject = document.querySelector(".selected");
  console.log(selectedProject.dataset.project);

  return selectedProject.dataset.project;
};

export { taskEvents, getDataID, addTaskToDom };
