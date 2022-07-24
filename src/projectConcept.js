import { projectArray } from ".";

const eventListeners = () => {
  const addProjectBtn = document.getElementById("addProjectBtn");
  addProjectBtn.addEventListener("click", showFormProject);

  const projectCancelBtn = document.getElementById("projectCancelBtn");
  projectCancelBtn.addEventListener("click", hideFormProject);

  const projectSubmitBtn = document.getElementById("projectSubmitBtn");
  projectSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addProjectToArray();
  });

  displayProject(projectArray);
};

const addProjectToArray = () => {
  let projectName = document.getElementById("projectInput").value;
  let projectData = newDataId();
  const newProject = createProject(projectData, projectName);
  console.log(projectData + "each time");
  projectArray.push(newProject);
  addProjectToDOM(projectData, projectName);
};

const addProjectToDOM = (projectData, projectName) => {
  const projectDiv = document.querySelector(".projects-div");
  const project = document.createElement("div");
  project.id = "projectTile";
  project.innerHTML = `<i class="fa-solid fa-list-check"></i>${projectName}`;
  project.dataset.project = projectData;
  project.classList.add("project");

  projectDiv.appendChild(project);
};

const displayProject = (array) => {
  array.forEach((element) => {
    addProjectToDOM(element.projectData, element.projectName);
  });
};

const createProject = (projectData, projectName) => {
  let taskList = [];
  let taskNum = taskList.length;

  return { projectData, projectName, taskList, taskNum };
};

const showFormProject = () => {
  const projectForm = document.getElementById("projectForm");

  projectForm.classList.remove("hide");
};

const hideFormProject = () => {
  const projectForm = document.getElementById("projectForm");

  projectForm.classList.add("hide");
};

const newDataId = () => {
  const projectDataNum = document.querySelectorAll("[data-project]");
  return projectDataNum.length;
};

export { eventListeners };
