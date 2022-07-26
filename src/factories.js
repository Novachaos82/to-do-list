const createProject = (projectData, projectName) => {
  let taskArray = [];
  let taskNum = taskArray.length;

  return { projectData, projectName, taskArray, taskNum };
};

const createTask = (title, details, date, id, priority, projectID) => {
  return {
    checkbox: false,
    title,
    details,
    date,
    id,
    priority,
    projectID,
  };
};

export { createProject, createTask };
