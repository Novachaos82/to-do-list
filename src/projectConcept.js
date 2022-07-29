import { projectArray } from ".";
import { createProject } from "./factories";
import {
  formModule,
  displayTask,
  displayProject,
  deleteProject,
  updateTitle,
  addTaskButtonModule,
  allTask,
} from "./displayDOM";
import { localeUpdate } from "./storage";

const eventListeners = () => {
  const addProjectBtn = document.getElementById("addProjectBtn");
  addProjectBtn.addEventListener("click", formModule().showFormProject);

  const projectCancelBtn = document.getElementById("projectCancelBtn");
  projectCancelBtn.addEventListener("click", formModule().hideFormProject);

  const projectSubmitBtn = document.getElementById("projectSubmitBtn");
  projectSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(projectArray);
    addProjectToArray();
  });

  /*checking the project div for selection of project*/
  const projects = document.querySelector(".projects-div");
  projects.addEventListener("click", (e) => {
    select(e);
  });

  /*checking the all task/task by date divs*/

  const defaults = document.querySelector(".default-projects");
  defaults.addEventListener("click", (e) => {
    select(e);
  });
};

/*adding project to "projectArray" by push and displating it through addToDom*/
const addProjectToArray = () => {
  let projectName = document.getElementById("projectInput").value;
  let projectData = newDataId();
  const newProject = createProject(projectData, projectName);
  console.log(projectData + "each time");
  projectArray.push(newProject);
  localeUpdate();
  addProjectToDOM(projectData, projectName);

  formModule().hideFormProject();
  //id++;
};

/*adding the project to dom wrt their id and name*/
const addProjectToDOM = (projectData, projectName) => {
  const projectDiv = document.querySelector(".projects-div");
  const project = document.createElement("div");
  project.id = "projectTile";
  project.innerHTML = `<i class="fa-solid fa-list-check"></i>${projectName}`;
  project.dataset.project = projectData;
  project.classList.add("project");

  const delBtn = document.createElement("button");
  delBtn.id = "deleteButton";
  delBtn.classList.add("projectDelBtn");
  delBtn.classList.add("fa-solid");
  delBtn.classList.add("fa-xmark");
  delBtn.dataset.id = projectData;
  //delBtn.innerHTML = `<i class="fa-solid fa-xmark">`;

  project.appendChild(delBtn);

  projectDiv.appendChild(project);
};

/*getting new id based on array length*/
const newDataId = () => {
  const projectDataNum = document.querySelectorAll("[data-project]");
  return projectDataNum.length;
};

/*checkig for selected event*/
const select = (e) => {
  let check = e.target.id;
  if (check === "projectTile") {
    selectTile(e.target);
    updateTitle(e.target.textContent);
    displayTask(e.target.getAttribute("data-project"));
  }
  if (check === "allTask") {
    selectTile(e.target);
    allTask();
    updateTitle(e.target.textContent);
    addTaskButtonModule().hideAddTaskButton();
  }

  if (check === "deleteButton") {
    deleteProject(e.target.getAttribute("data-id"));
  }
};

/*adding the class "selected" on click event(selection)*/
const selectTile = (projectList) => {
  if (document.querySelector(".selected") != null) {
    const oldTile = document.querySelector(".selected");
    oldTile.classList.remove("selected");
  }

  projectList.classList.add("selected");
  addTaskButtonModule().showAddTaskBtn();
  /*displaying task on each selection*/
};

export { eventListeners, addProjectToDOM };
