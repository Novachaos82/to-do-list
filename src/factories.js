const createProject = (projectData, projectName) => {
  let taskArray = [];
  let taskNum = taskArray.length;

  return {
    projectData,
    projectName,
    taskArray,
    taskNum,
  };
};

const createTask = (
  title,
  details,
  date,
  id,
  priority,
  projectID,
  checkbox
) => {
  const changeCheckStatus = () => {
    this.checkbox != this.checkbox;
  };
  return {
    checkbox: checkbox,
    title,
    details,
    date,
    id,
    priority,
    projectID,
    changeCheckStatus,
  };
};

export { createProject, createTask };
