import { getDataID, taskEvents } from "./taskConcept";
import { dataLength, eventListeners } from "./projectConcept";
import { displayProject, displayTask } from "./displayDOM";
//import { submit } from "./projectConcept";

console.log("test main.js");

let projectArray = [];
//if (localStorage.getItem("projects")) {
//  let objects = JSON.parse(localStorage.getItem("projects"));
//  console.log(objects);
//  projectArray = objects;
//  console.log("exist");
//  displayProject(projectArray);
//} else {
//  console.log("doesn't exist");
//}

getDataID();
eventListeners();
taskEvents();

export { projectArray };
