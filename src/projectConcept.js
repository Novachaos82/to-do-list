import { projectArray } from ".";
import { createProject } from "./factories";
import {
  formModule,
  displayTask,
  displayProject,
  deleteProject,
  updateTitle,
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

    //addProjectToArray();

    console.log(projectArray);
    addProjectToArray();
  });

  const projects = document.querySelector(".projects-div");
  projects.addEventListener("click", (e) => {
    select(e);
  });
};

let id = 0;
const addProjectToArray = () => {
  let projectName = document.getElementById("projectInput").value;
  let projectData = id;
  const newProject = createProject(projectData, projectName);
  console.log(projectData + "each time");
  projectArray.push(newProject);
  //localeUpdate();
  addProjectToDOM(projectData, projectName);

  formModule().hideFormProject();
  id++;
};

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

//const newDataId = () => {
//  const projectDataNum = document.querySelectorAll("[data-project]");
//  return projectDataNum.length;
//};

const select = (e) => {
  let check = e.target.id;
  if (check === "projectTile") {
    selectTile(e.target);
    updateTitle(e.target.textContent);
  }
  if (check === "deleteButton") {
    console.log(
      e.target.parentNode.getAttribute("data-project") +
        "checking the delete button id"
    );
    deleteProject(e.target.getAttribute("data-id"));
  }
};

const selectTile = (projectList) => {
  if (document.querySelector(".selected") != null) {
    const oldTile = document.querySelector(".selected");
    oldTile.classList.remove("selected");
  }

  projectList.classList.add("selected");
  /*displaying task on each selection*/
  displayTask(projectList.getAttribute("data-project"));
};

export { eventListeners, addProjectToDOM };
