import { formsButtons } from "./domContent";
import { dataLength, eventListeners } from "./projectConcept";
//import { submit } from "./projectConcept";

console.log("test main.js");

let projectArray = [];

//const formBtn = document.getElementById("projectForm");
//const addProjectBtn = document.getElementById("addProjectBtn");
//addProjectBtn.addEventListener("click", () => {
//  formBtn.classList.toggle("hide");
//});
formsButtons();
//submit();
eventListeners();
export { projectArray };
