import { getDataID, taskEvents } from "./taskConcept";
import { dataLength, eventListeners } from "./projectConcept";
import { displayProject, displayTask } from "./displayDOM";
//import { submit } from "./projectConcept";

console.log("test main.js");

let projectArray = [];

//const formBtn = document.getElementById("projectForm");
//const addProjectBtn = document.getElementById("addProjectBtn");
//addProjectBtn.addEventListener("click", () => {
//  formBtn.classList.toggle("hide");
//});
//submit();
getDataID();
eventListeners();
taskEvents();


export { projectArray };
