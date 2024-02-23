// Import necessary functions and classes
import { Project } from "./projectModule.js";
import { Task } from "./taskModule.js";

export class StorageHandler {
  // Function to save projects and tasks to local storage
  //   projects = {
  //   [id] : {
  //      Name:
  //      Desc:
  //      Prio:
  //   }
  // }

  // onSaveToLocal(id, project) {
  //   projects = GetLocal()
  //   local.setItem(‘projects’, JSON.stringify({…projects, { [id]: project })
  // }

  saveToLocalStorage(project) {
    let projectsData = localStorage.getItem("projects");
    if (!projectsData) {
      projectsData = {};
    } else {
      projectsData = JSON.parse(projectsData);
    }

    projectsData[project.projectId] = project;

    localStorage.setItem("projects", JSON.stringify(projectsData));

    // projectsData.setItem(
    //   "projects",
    //   JSON.stringify(...projectsData, { [project.projectId]: project })
    // );
    // const projectsData = localStorage.getItem("projects");
    // if (Array.isArray(projectsData)) {
    //   localStorage.setItem("project", [
    //     ...projectsData,
    //     JSON.stringify(project),
    //   ]);
    // } else {
    //   localStorage.setItem("project", JSON.stringify(project));
    // }
  }

  // Function to retrieve projects and tasks from local storage
  loadFromLocalStorage() {
    const projectsData = localStorage.getItem("projects");
    if (projectsData) {
      const projects = JSON.parse(projectsData);
      if (projects) {
        const projectObjects = Object.values(projects).map((project) => {
          const tasks = project.tasks.map((taskData) => {
            return new Task(
              taskData.name,
              taskData.description,
              taskData.dueDate,
              taskData.priority,
              project
            );
          });
          return new Project(
            project.id,
            project.name,
            project.description,
            project.dueDate,
            project.priority,
            tasks
          );
        });
        return projectObjects;
      } else {
        console.error("Projects data in local storage is invalid");
        return [];
      }
    }
  }
  // if (projectsData) {
  //   const projects = JSON.parse(projectsData);
  //   // Check if projects is an array
  //   if (projects) {
  //     return projects.forEach((project) => {
  //       const tasks = project.tasks.forEach((taskData) => {
  //         return new Task(
  //           taskData.name,
  //           taskData.description,
  //           taskData.dueDate,
  //           taskData.priority,
  //           project
  //         );
  //       });
  //       return new Project(
  //         project.id,
  //         project.name,
  //         project.description,
  //         project.dueDate,
  //         project.priority,
  //         tasks
  //       );
  //     });
  //   } else {
  //     console.error("Projects data in local storage doesn't exist");
  //     return [];
  //   }
  // } else {
  //   return [];
  // }
}
