import { addProjectToDOM } from "./projectConcept";
import { addTaskToDom } from "./taskConcept";
import { projectArray } from ".";
import { localeUpdate } from "./storage";

/*clear tasks/todos panel before displaying*/
const clearTaskContent = () => {
  document.querySelector(".tasks").innerHTML = "";
};

/*function to display all task*/
const allTask = () => {
  clearTaskContent();
  projectArray.forEach((project) => {
    project.taskArray.forEach((task) => {
      addTaskToDom(
        task.checkbox,
        task.title,
        task.details,
        task.date,
        task.id,
        task.priority
      );
    });
  });

  deleteBtnDisable();
};

/*disable deleteBtn*/
const deleteBtnDisable = () => {
  const allDeleteBtn = document.querySelectorAll("#delete");
  allDeleteBtn.forEach((deleteBtn) => {
    deleteBtn.style.display = "none";
  });
};

/*form module to control the opening and closing of forms(project + task)*/
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

/*display the project(objects) from the project array(array of objects)*/
const displayProject = (array) => {
  document.querySelector(".projects-div").replaceChildren();
  console.log(" displayProject is called");
  array.forEach((element) => {
    if (element != null) {
      addProjectToDOM(element.projectData, element.projectName);
    }
  });
};

/*display the task by taking parentArray(project) id*/
const displayTask = (projectID) => {
  console.log(" displayTask is called");
  clearTaskContent();

  projectArray[projectID].taskArray.forEach((task) => {
    addTaskToDom(
      task.checkbox,
      task.title,
      task.details,
      task.date,
      task.id,
      task.priority
    );
  });
};

/*updating title */
const updateTitle = (title) => {
  const titleDiv = document.querySelector(".title");
  titleDiv.textContent = title;
};

/*for checkbox checking the task completion on click*/
const checkTask = (projectID, taskID) => {
  projectArray[projectID].taskArray.forEach((task) => {
    if (task.id == taskID) {
      if (task.checkbox === false) {
        task.checkbox = true;
      } else {
        task.checkbox = false;
      }
    }
  });
  displayTask(projectID);
};

/*function to delete project by projectID*/
const deleteProject = (projectID) => {
  console.log(`removing  ${projectID}...`);
  //delete projectArray[projectID];

  projectArray.splice(projectID, 1);
  projectArray.forEach((project) => {
    if (project.projectData > projectID) {
      project.projectData -= 1;
    }
  });
  addTaskButtonModule().hideAddTaskButton();

  localeUpdate();
  displayProject(projectArray);
};

/*function to delete task taking projectID for parent array index and taskid for the child array index*/
const deleteTask = (projectID, taskID) => {
  projectArray[projectID].taskArray.splice(taskID, 1);
  projectArray[projectID].taskArray.forEach((task) => {
    if (task.id > taskID) {
      task.id -= 1;
    }
  });
  localeUpdate();
  displayTask(projectID);
};

/*hide/show add task button based on selection of project*/
const addTaskButtonModule = () => {
  const addTaskBtn = document.getElementById("addTask");
  const hideAddTaskButton = () => {
    addTaskBtn.style.display = "none";
  };

  const showAddTaskBtn = () => {
    addTaskBtn.style.display = "block";
  };
  return { hideAddTaskButton, showAddTaskBtn };
};

export {
  formModule,
  displayProject,
  displayTask,
  deleteTask,
  deleteProject,
  updateTitle,
  addTaskButtonModule,
  allTask,
  checkTask,
};
