// Import necessary functions and classes
import { Project } from "./projectModule.js";
import { Task } from "./taskModule.js";

export class StorageHandler {
  // Function to save projects and tasks to local storage

  saveToLocalStorage(project) {
    let projectsData = localStorage.getItem("projects");
    if (!projectsData) {
      projectsData = {};
    } else {
      projectsData = JSON.parse(projectsData);
    }

    projectsData[project.projectId] = project;

    localStorage.setItem("projects", JSON.stringify(projectsData));
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

  removeProjectFromLocalStorage(projectId) {
    // Retrieve projects data from local storage
    let projectsData = localStorage.getItem("projects");

    // If projects data exists
    if (projectsData) {
      // Parse JSON string into an object
      projectsData = JSON.parse(projectsData);

      // Remove project with the specified id from the object
      delete projectsData[projectId];

      // Update data in local storage
      localStorage.setItem("projects", JSON.stringify(projectsData));
    }
  }
}
