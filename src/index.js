import { formsButtons } from "./domContent";
import { submit } from "./projectConcept";

console.log("test main.js");

let project = [];

//const formBtn = document.getElementById("projectForm");
//const addProjectBtn = document.getElementById("addProjectBtn");
//addProjectBtn.addEventListener("click", () => {
//  formBtn.classList.toggle("hide");
//});
formsButtons();
submit();
console.log(project);
export { project };
