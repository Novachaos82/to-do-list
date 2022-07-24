import { project } from ".";

function projectCons(name) {
  this.name = name;
}

function addToProject(name) {
  const obj = new projectCons(name);
  project.push(obj);
  projectAdd();
}

function projectAdd() {
  const projects = document.querySelectorAll(".project");
  projects.forEach((proj) => {
    proj.remove();
  });
  project.forEach((obj) => {
    const projectDiv = document.querySelector(".projects-div");
    const projectEle = document.createElement("div");
    projectEle.classList.add("project");
    projectEle.textContent = obj.name;

    projectDiv.appendChild(projectEle);
  });
}

function submit() {
  document.getElementById("projectSubmitBtn").addEventListener("click", (e) => {
    e.preventDefault();
    console.log(document.getElementById("projectInput").value);
    console.log(project);
    addToProject(document.getElementById("projectInput").value);
  });
}

export { submit };
