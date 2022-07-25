import { projectArray } from ".";
import { createTask } from "./factories";
import { showTaskForm, hideTaskForm } from "./displayDOM";
/*task form button events*/
const taskEvents = () => {
  const addTaskBtn = document.getElementById("addTask");
  addTaskBtn.addEventListener("click", showTaskForm);

  const cancelTaskBtn = document.getElementById("taskCancelBtn");
  cancelTaskBtn.addEventListener("click", hideTaskForm);

  const submitTaskBtn = document.getElementById("taskSubmitBtn");
  submitTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTasktoTaskArray();
    console.log(projectArray[getDataID()].taskArray);
  });
};
/*task creator factory*/

let id = 0;

/*adding the task to projectArray "taskArray"*/
const addTasktoTaskArray = () => {
  const title = document.getElementById("taskTitle").value;
  //const checkbox = document.getElementById("checkboxID").checked;
  const details = document.getElementById("taskDetails").value;
  const date = document.getElementById("Date").value;
  const dataId = getDataID();
  const taskID = id;
  const newTask = createTask(title, details, date, taskID, dataId);
  projectArray[dataId].taskArray.push(newTask);
  id++;
  hideTaskForm();
};

/*adding task to DOM*/
const addTaskToDom = (checkbox, title, details, date, taskID) => {
  /*task  div*/
  const tasks = document.querySelector(".tasks");

  /*making an li element for each tasks*/
  const li = document.createElement("li");

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
  listBtnDiv.appendChild(dateEl);

  const deleteBtn = document.createElement("button");
  deleteBtn.id = "delete";
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  listBtnDiv.appendChild(deleteBtn);

  li.dataset.task = taskID;

  /*appending all the divs to li*/
  li.appendChild(checkBoxDiv);
  li.appendChild(listDetails);
  li.appendChild(listBtnDiv);

  /*appending li to task div*/
  tasks.appendChild(li);
};

/*getting the selected project data id "data-project"*/
const getDataID = () => {
  const selectedProject = document.querySelector(".selected");
  console.log(selectedProject.dataset.project);

  return selectedProject.dataset.project;
};

export { taskEvents, getDataID, addTaskToDom };
