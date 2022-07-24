const addProjectBtn = document.getElementById("addProjectBtn");
const projectSubmitBtn = document.getElementById("projectSubmitBtn");
const projectCancelBtn = document.getElementById("projectCancelBtn");
const projectForm = document.getElementById("projectForm");

const taskForm = document.getElementById("taskForm");
const addTaskBtn = document.getElementById("addTask");
const taskSubmitBtn = document.getElementById("taskSubmitBtn");
const taskCancelBtn = document.getElementById("taskCancelBtn");

//const
const formsController = () => {
  const showFormProject = function () {
    projectForm.classList.remove("hide");
  };

  const hideFormProject = function () {
    projectForm.classList.add("hide");
  };

  const showFormTask = function () {
    taskForm.classList.remove("hide");
  };

  const hideFormTask = function () {
    taskForm.classList.add("hide");
  };

  return { showFormProject, hideFormProject, showFormTask, hideFormTask };
};

function formsButtons() {
  const formControl = formsController();

  addProjectBtn.addEventListener("click", () => {
    formControl.showFormProject();
  });

  projectCancelBtn.addEventListener("click", () => {
    formControl.hideFormProject();
  });

  addTaskBtn.addEventListener("click", () => {
    formControl.showFormTask();
    console.log("yes working");
  });

  taskCancelBtn.addEventListener("click", () => {
    formControl.hideFormTask();
  });
}

export { formsButtons };
