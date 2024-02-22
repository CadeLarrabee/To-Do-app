import { format } from "date-fns";
import { Task } from "./taskModule.js";
import { Project } from "./projectModule.js";
//
//Controls the dom for the project
//
export class DomController {
  //
  //Handle the setup of the page pre-project injection
  //
  GenerateDomStructure(defaultProj) {
    const mainProjPanelWrapper = document.createElement("div");
    mainProjPanelWrapper.classList.add("mainWrapper");
    document.body.appendChild(mainProjPanelWrapper);

    this.GenerateNavPanel(mainProjPanelWrapper);
    this.GenerateBodyPanel(mainProjPanelWrapper);
  }

  GenerateNavPanel(mainWrapper) {
    //
    // Handle the generation of the nav panel and all its components.
    //
    const navPanelWrapper = document.createElement("div");
    navPanelWrapper.classList.add("nav");
    navPanelWrapper.classList.add("navWrapper");

    //Title and time panel

    const navPanelMainTitle = document.createElement("div");
    navPanelMainTitle.classList.add("navTitle", "navItem");
    navPanelMainTitle.textContent = "Today:";
    navPanelWrapper.appendChild(navPanelMainTitle);

    const navPanelMainDate = document.createElement("div");
    navPanelMainDate.classList.add("navDate", "navItem");

    const currentDate = new Date();
    const formattedDate = format(currentDate, "yyyy-MM-dd");
    navPanelMainDate.textContent = formattedDate;
    navPanelMainTitle.appendChild(navPanelMainDate);

    //Project panels

    const navProjectPanelWrapper = document.createElement("div");
    navProjectPanelWrapper.classList.add("NavProjPanelWrapper");
    navPanelWrapper.appendChild(navProjectPanelWrapper);

    // const navDefProj = document.createElement("div");
    // navDefProj.textContent = defaultProj.projectName;
    // navDefProj.classList.add(defaultProj.projectPrio);
    // navDefProj.classList.add("projName", "navItem");
    // navProjectPanelWrapper.appendChild(navDefProj);

    //Options panel > includes help and settings

    const navOptionsWrapper = document.createElement("div");
    navOptionsWrapper.classList.add("optionsWrapper");

    //Generate the setting banner in the nav bar

    const navSettingsWrapper = document.createElement("div");
    navSettingsWrapper.classList.add("navItem");

    const navSettings = document.createElement("div");
    navSettings.textContent = "Settings";
    navSettingsWrapper.appendChild(navSettings);

    const navSettingsIcon = document.createElement("img");
    navSettingsIcon.src = "";
    navSettingsIcon.classList.add("navIcon");
    navSettingsWrapper.appendChild(navSettingsIcon);

    navOptionsWrapper.appendChild(navSettingsWrapper);

    //Generate the help banner in the nav bar

    const navHelpWrapper = document.createElement("div");
    navHelpWrapper.classList.add("navItem");

    const navHelp = document.createElement("div");
    navHelp.textContent = "Help";
    navHelpWrapper.appendChild(navHelp);

    const navHelpIcon = document.createElement("img");
    navHelpIcon.src = "";
    navHelpIcon.classList.add("navIcon");
    navHelpWrapper.appendChild(navHelpIcon);

    navOptionsWrapper.appendChild(navHelpWrapper);

    navPanelWrapper.appendChild(navOptionsWrapper);

    mainWrapper.appendChild(navPanelWrapper);
  }

  AddNewNavPanelProj(project) {
    //This eventually should allow you to open specific projects onclick.
    const navDefProj = document.createElement("div");
    const navProjectPanelWrapper = document.querySelector(
      ".NavProjPanelWrapper"
    );
    navDefProj.textContent = project.projectName;
    navDefProj.classList.add(
      "navItem",
      project.projectName,
      project.projectPrio
    );

    navProjectPanelWrapper.appendChild(navDefProj);
  }

  DeleteNavPanelProj(projectName) {
    // const navProjectPanelWrapper = document.querySelector(
    //   ".NavProjPanelWrapper"
    // );
    const navProjectToDelete = document.querySelector(
      `.${projectName}.navItem`
    );
    if (navProjectToDelete) {
      navProjectToDelete.parentNode.removeChild(navProjectToDelete);
    }
  }

  GenerateBodyPanel(mainWrapper) {
    const AddNewProjWrapper = document.createElement("div");
    AddNewProjWrapper.classList.add("projBodyWrapper");
    mainWrapper.appendChild(AddNewProjWrapper);
    this.GenerateAddButton(AddNewProjWrapper);
  }

  GenerateProjectPanel(Wrapper, Project) {
    const projWrapper = document.createElement("div");
    projWrapper.classList.add(Project.projectPrio, "projWrapper");
    projWrapper.setAttribute("data-project-name", Project.projectName);
    Project.DomElement = projWrapper;
    // Add data attribute to identify the project

    const projName = document.createElement("div");
    projName.textContent = Project.projectName;
    projName.classList.add("projName", "projItem");
    projWrapper.appendChild(projName);

    const projDate = document.createElement("div");
    projDate.textContent =
      "Due Date: " + Project.projectDue.toLocaleDateString();
    projDate.classList.add("projDate", "projItem");
    projWrapper.appendChild(projDate);

    const projectDesc = document.createElement("div");
    projectDesc.textContent = Project.projectDesc;
    projectDesc.classList.add("projDesc", "projItem");
    projWrapper.appendChild(projectDesc);

    const projButtonWrapper = document.createElement("div");

    this.GenerateAddButton(projButtonWrapper, Project);
    this.GenerateDeleteButton(projButtonWrapper);

    projWrapper.appendChild(projButtonWrapper);

    if (Project.projectTasks.length === 0) {
    } else {
      Project.projectTasks.forEach((element) => {
        const taskWrapper = document.createElement("div");
        this.GenerateTaskPanel(taskWrapper, element);

        projWrapper.appendChild(taskWrapper);
      });
      projWrapper.classList.add("hasTasks");
    }
    this.ModifyTaskHeight(projWrapper, Project);
    this.AddNewNavPanelProj(Project);

    Wrapper.appendChild(projWrapper);
  }

  ModifyTaskHeight(projWrapper, Project) {
    const taskHeight = 100;
    const numTasks = Project.projectTasks ? Project.projectTasks.length : 0;
    const totalHeight = 100 + numTasks * taskHeight;

    // Set the height of projWrapper
    projWrapper.style.height = totalHeight + "px";
  }

  extractProjectInfo(projectWrapper) {
    // Retrieve project name from the data attribute
    const projectName = projectWrapper.getAttribute("data-project-name");

    // Find the Project instance associated with the project name
    return projects.find((project) => project.name === projectName);
  }

  GenerateTaskPanel(Wrapper, task) {
    //
    //Given a task and a wrapper, generate a panel that handles info about the task.
    //
    Wrapper.classList.add("taskWrapper");

    this.GenerateDeleteButton(Wrapper, task.taskPrio);

    // const taskCircle = document.createElement("div");
    // taskCircle.classList.add("taskCircle", task.taskPrio, "taskItem");

    const taskName = document.createElement("div");
    taskName.textContent = task.taskName;
    taskName.classList.add("taskName", "taskItem");

    const taskDate = document.createElement("div");
    taskDate.textContent = task.taskDue.toLocaleDateString();
    taskDate.classList.add("taskDate", "taskItem");

    const taskDesc = document.createElement("div");
    taskDesc.textContent = task.taskDesc;
    taskDesc.classList.add("taskDesc", "taskItem");

    //Wrapper.appendChild(taskCircle);
    Wrapper.appendChild(taskName);
    Wrapper.appendChild(taskDate);
    Wrapper.appendChild(taskDesc);
  }

  //is it possible to not have to import the task file to
  //make new tasks here? Should taskModule.js handle this?
  //but then it would have to import the dom module too, right?
  AddNewTask(name, description, dueDate, priority, project) {
    // Create a new Task object
    const newTask = new Task(name, description, dueDate, priority, project);

    // Generate a new task panel for the new task
    const taskWrapper = document.createElement("div");
    this.GenerateTaskPanel(taskWrapper, newTask);

    // Append the task panel to the appropriate location in the DOM
    project.tasks.push(newTask);
    const projWrapper = document.querySelector(
      `[data-project-name="${project.name}"]`
    );

    //Check to see if we need to enlarge the project container
    this.ModifyTaskHeight(projWrapper, project);

    projWrapper.appendChild(taskWrapper);

    //Check if we need to tag the projectWrapper to be enlarged
    // const hasTasksClass = projWrapper.classList.contains("hasTasks");

    // if (!hasTasksClass) {
    //   projWrapper.classList.add("hasTasks");
    // }
  }

  AddNewProject(name, description, dueDate, priority) {
    // Create a new proj object
    const newProject = new Project(name, description, dueDate, priority);
    const mainWrapper = document.querySelector(".projBodyWrapper");

    this.GenerateProjectPanel(mainWrapper, newProject);
  }

  GenerateDeleteButton(wrapper, taskPrio) {
    const Delete = document.createElement("button");

    Delete.addEventListener("click", () => this.RemovePanel(wrapper));

    if (taskPrio) {
      Delete.classList.add("taskCircle", taskPrio, "taskItem");
    } else {
      Delete.classList.add("deleteBtn");
      Delete.textContent = " X ";
    }

    wrapper.appendChild(Delete);
  }

  GenerateAddButton(wrapper, project) {
    const Add = document.createElement("button");
    Add.classList.add("addBtn");
    Add.textContent = " + ";

    Add.addEventListener("click", () => this.GenerateAddForm(wrapper, project));

    wrapper.appendChild(Add);
  }

  // Remove a panel and all its children from the DOM
  RemovePanel(panel) {
    if (!panel) return;

    if (panel.classList.contains("projWrapper")) {
      // Call the function to delete the corresponding navigation panel
      this.DeleteNavPanelProj(panel.dataset.projectName);
    }

    while (panel.firstChild) {
      panel.removeChild(panel.firstChild);
    }
    panel.parentNode.removeChild(panel);
  }

  //Generate a form that allows you to add a new project, or task
  //should have a submit button at the bottom, and a close button.
  GenerateAddForm(wrapper, project) {
    const formWrapper = document.createElement("div");

    const headerWrapper = document.createElement("div");

    const title = document.createElement("div");
    title.textContent = "Add a new task or project";
    headerWrapper.appendChild(title);

    //could maybe do headerWrapper.appendChild(code below)?
    this.GenerateDeleteButton(formWrapper);

    formWrapper.appendChild(headerWrapper);

    const form = document.createElement("form");

    const inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("name", "textInput");
    inputName.setAttribute("placeholder", "Enter name");
    form.appendChild(inputName);

    const inputDesc = document.createElement("input");
    inputDesc.setAttribute("type", "text");
    inputDesc.setAttribute("desc", "textInput");
    inputDesc.setAttribute("placeholder", "Enter description");
    form.appendChild(inputDesc);

    const inputDate = document.createElement("input");
    inputDate.setAttribute("type", "date");
    inputDate.setAttribute("name", "dateInput");
    form.appendChild(inputDate);

    const inputPrio = document.createElement("select");
    inputPrio.name = "priority";
    const options = ["Critical", "Urgent", "Routine"];

    options.forEach((optionText) => {
      const optionElement = document.createElement("option");
      optionElement.textContent = optionText;
      inputPrio.appendChild(optionElement);
    });
    form.appendChild(inputPrio);

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      // Retrieve input values
      const name = inputName.value;
      const description = inputDesc.value;
      const date = inputDate.value;
      const priority = inputPrio.value;

      this.RemovePanel(formWrapper);
      if (!project) {
        this.AddNewProject(name, description, date, priority);
      } else {
        this.AddNewTask(name, description, date, priority, project);
      }
    });

    formWrapper.appendChild(form);

    wrapper.appendChild(formWrapper);
  }

  GenerateOnEntry(defaultProj) {
    this.GenerateDomStructure(defaultProj);
  }
}
