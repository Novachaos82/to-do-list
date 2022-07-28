import { getDataID, taskEvents } from "./taskConcept";
import { addProjectToDOM, dataLength, eventListeners } from "./projectConcept";
import { displayProject, displayTask } from "./displayDOM";
import { createProject } from "./factories";
//import { submit } from "./projectConcept";

console.log("test main.js");

let projectArray = [];
if (localStorage.getItem("projects")) {
  let objects = JSON.parse(localStorage.getItem("projects"));
  console.log(objects);
  projectArray = objects;
  console.log("exist");
  displayProject(projectArray);
} else {
  console.log("doesn't exist");

  let defaultProject = createProject("0", "default1");
  projectArray.push(defaultProject);
  addProjectToDOM("0", "default1");
  displayProject(projectArray);
}

getDataID();
eventListeners();
taskEvents();

export { projectArray };
