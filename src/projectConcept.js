import { projectArray } from ".";
import { createProject } from "./factories";
import {
  showFormProject,
  hideFormProject,
  displayTask,
  displayProject,
} from "./displayDOM";

import { getDataID } from "./taskConcept";
const eventListeners = () => {
  const addProjectBtn = document.getElementById("addProjectBtn");
  addProjectBtn.addEventListener("click", showFormProject);

  const projectCancelBtn = document.getElementById("projectCancelBtn");
  projectCancelBtn.addEventListener("click", hideFormProject);

  const projectSubmitBtn = document.getElementById("projectSubmitBtn");
  projectSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addProjectToArray();

    console.log(projectArray);
    displayProject(projectArray);
  });

  const projects = document.querySelector(".projects-div");
  projects.addEventListener("mouseover", () => {
    select();
  });
};

const addProjectToArray = () => {
  let projectName = document.getElementById("projectInput").value;
  let projectData = newDataId();
  const newProject = createProject(projectData, projectName);
  console.log(projectData + "each time");
  projectArray.push(newProject);

  hideFormProject();
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
  delBtn.innerHTML = `<i class="fa-solid fa-xmark">`;

  project.appendChild(delBtn);

  projectDiv.appendChild(project);
};

const newDataId = () => {
  const projectDataNum = document.querySelectorAll("[data-project]");
  return projectDataNum.length;
};

const select = () => {
  //if (e.contains("project")) {
  //  selectClassAdd();
  //} else {
  //  deleteProject();
  //}
  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    //project.classList.remove("selected");
    project.addEventListener("click", (e) => {
      if (document.querySelector(".selected") != null) {
        const oldTile = document.querySelector(".selected");
        oldTile.classList.remove("selected");
      }

      project.classList.add("selected");
      console.log(document.querySelector(".selected").dataset.project);
      e.stopImmediatePropagation();
      displayTask(getDataID());
    });
    //project.classList.remove("selected");
  });
};

//const selectClassAdd = () => {};
//const deleteProject = (projectData) => {
//  projectArray.splice(projectData, 1);
//};

export { eventListeners, addProjectToDOM };
