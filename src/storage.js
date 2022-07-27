import { projectArray } from ".";

const localeUpdate = () => {
  localStorage.setItem("projects", JSON.stringify(projectArray));
};

export { localeUpdate };
