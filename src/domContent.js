const addProjectBtn = document.getElementById("addProjectBtn");
const projectSubmitBtn = document.querySelector(".projectSubmitBtn");
const projectCancelBtn = document.querySelector(".projectCancelBtn");
const projectForm = document.getElementById("projectForm");
const formsController = () => {
  const showFormProject = function () {
    projectForm.classList.remove("hide");
  };

  const hideFormProject = function () {
    projectForm.classList.add("hide");
  };

  return { showFormProject, hideFormProject };
};

function formsButtons() {
  const formControl = formsController();

  addProjectBtn.addEventListener("click", () => {
    formControl.showFormProject();
  });

  projectCancelBtn.addEventListener("click", () => {
    formControl.hideFormProject();
  });
}

export { formsButtons };
