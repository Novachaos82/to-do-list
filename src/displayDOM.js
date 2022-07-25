import { addProjectToDOM } from "./projectConcept";
import { addTaskToDom } from "./taskConcept";
import { projectArray } from ".";

const showFormProject = () => {
  const projectForm = document.getElementById("projectForm");

  projectForm.classList.remove("hide");
  projectForm.reset();
};

const hideFormProject = () => {
  const projectForm = document.getElementById("projectForm");

  projectForm.classList.add("hide");
};

const showTaskForm = () => {
  const form = document.getElementById("taskForm");
  form.classList.remove("hide");
  form.reset();
};

const hideTaskForm = () => {
  const form = document.getElementById("taskForm");
  form.classList.add("hide");
};

const displayProject = (array) => {
  document.querySelector(".projects-div").replaceChildren();
  console.log(" displayProject is called");
  array.forEach((element) => {
    addProjectToDOM(element.projectData, element.projectName);
  });
};

const displayTask = (projectID) => {
  console.log(" displayTask is called");
  document.querySelector(".tasks").innerHTML = "";

  projectArray[projectID].taskArray.forEach((task) => {
    console.log("loop called");
    addTaskToDom(
      task.checkbox,
      task.title,
      task.details,
      task.date,
      task.taskID
    );
  });
};

export {
  showFormProject,
  hideFormProject,
  showTaskForm,
  hideTaskForm,
  displayProject,
  displayTask,
};
