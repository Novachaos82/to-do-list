const taskForm = document.getElementById("taskForm");
const addTaskBtn = document.getElementById("addTask");
const taskSubmitBtn = document.getElementById("taskSubmitBtn");
const taskCancelBtn = document.getElementById("taskCancelBtn");

//const
const formsController = () => {
  const showFormTask = function () {
    taskForm.classList.remove("hide");
  };

  const hideFormTask = function () {
    taskForm.classList.add("hide");
  };

  return { showFormTask, hideFormTask };
};

function formsButtons() {
  const formControl = formsController();

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
