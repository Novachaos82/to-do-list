import { addProjectToDOM } from "./projectConcept";
import { addTaskToDom, getDataID } from "./taskConcept";
import { projectArray } from ".";
import { localeUpdate } from "./storage";

const formModule = () => {
  const showTaskForm = () => {
    const form = document.getElementById("taskForm");
    form.classList.remove("hide");

    form.reset();
  };

  const hideTaskForm = () => {
    const form = document.getElementById("taskForm");
    form.classList.add("hide");
  };

  const showFormProject = () => {
    const projectForm = document.getElementById("projectForm");

    projectForm.classList.remove("hide");
    document.getElementById("projectInput").focus();
    projectForm.reset();
  };

  const hideFormProject = () => {
    const projectForm = document.getElementById("projectForm");

    projectForm.classList.add("hide");
  };

  return { showTaskForm, hideTaskForm, showFormProject, hideFormProject };
};

const displayProject = (array) => {
  document.querySelector(".projects-div").replaceChildren();
  console.log(" displayProject is called");
  array.forEach((element) => {
    if (element != null) {
      addProjectToDOM(element.projectData, element.projectName);
    }
  });
};

const displayTask = (projectID) => {
  console.log(" displayTask is called");
  document.querySelector(".tasks").innerHTML = "";

  projectArray[projectID].taskArray.forEach((task) => {
    console.log("display task called");
    addTaskToDom(
      task.checkbox,
      task.title,
      task.details,
      task.date,
      task.taskID,
      task.priority
    );
  });
};

const updateTitle = (title) => {
  const titleDiv = document.querySelector(".title");
  titleDiv.textContent = title;
};

const deleteProject = (projectID) => {
  console.log(`removing  ${projectID}...`);
  delete projectArray[projectID];

  //projectArray.splice(projectID, 1);

  //projectArray = projectArray.filter((x) => x.projectData !== projectID);
  //localeUpdate();
  displayProject(projectArray);
};

const deleteTask = (projectID, taskID) => {
  console.log("delete task function");

  //delete projectArray[projectID].taskArray[taskID];
  projectArray[projectID].taskArray.splice(taskID, 1);
  //projectArray[projectID].taskArray = projectArray[projectID].taskArray.filter(
  //  (task) => task.id != taskID
  //);
  //localeUpdate();
  displayTask(projectID);
  //projectArray[projectID].taskArray = projectArray[projectID].taskArray.filter(
  //(x) => x.id !== taskID
  //);
};
export {
  formModule,
  displayProject,
  displayTask,
  deleteTask,
  deleteProject,
  updateTitle,
};
