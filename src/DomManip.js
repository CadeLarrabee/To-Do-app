import { format } from "date-fns";
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

    this.GenerateNavPanel(mainProjPanelWrapper, defaultProj);
    this.GenerateBodyPanel(mainProjPanelWrapper, defaultProj);
  }

  GenerateNavPanel(mainWrapper, defaultProj) {
    //
    // Handle the generation of the nav panel and all its components.
    //
    const navPanelWrapper = document.createElement("div");
    navPanelWrapper.classList.add("nav");
    navPanelWrapper.classList.add("navWrapper");

    const navPanelMainTitle = document.createElement("div");
    navPanelMainTitle.classList.add("navTitle", "navItem");
    navPanelMainTitle.textContent = "Today:";
    navPanelWrapper.appendChild(navPanelMainTitle);

    const navPanelMainDate = document.createElement("div");
    navPanelMainDate.classList.add("navDate", "navItem");

    const currentDate = new Date();
    const formattedDate = format(currentDate, "yyyy-MM-dd");
    navPanelMainDate.textContent = formattedDate;
    navPanelWrapper.appendChild(navPanelMainDate);

    const navProjectPanelWrapper = document.createElement("div");
    navPanelWrapper.appendChild(navProjectPanelWrapper);

    const navDefProj = document.createElement("div");
    navDefProj.textContent = defaultProj.projectName;
    navDefProj.classList.add(defaultProj.projectPrio);
    navDefProj.classList.add("projName", "navItem");
    navProjectPanelWrapper.appendChild(navDefProj);

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

    navPanelWrapper.appendChild(navHelpWrapper);

    navPanelWrapper.appendChild(navOptionsWrapper);

    mainWrapper.appendChild(navPanelWrapper);
  }

  GenerateBodyPanel(mainWrapper, defaultProj) {
    this.GenerateProjectPanel(mainWrapper, defaultProj);
  }

  GenerateProjectPanel(Wrapper, Project) {
    const projWrapper = document.createElement("div");
    projWrapper.classList.add(Project.projectPrio, "projWrapper");

    const projName = document.createElement("div");
    projName.textContent = Project.projectName;
    projName.classList.add("projName", "projItem");
    projWrapper.appendChild(projName);

    const projDate = document.createElement("div");
    projDate.textContent = Project.projectDue;
    projDate.classList.add("projDate", "projItem");
    projWrapper.appendChild(projDate);

    this.GenerateDeleteButton(projWrapper);

    Project.projectTasks.forEach((element) => {
      const taskWrapper = document.createElement("div");
      this.GenerateTaskPanel(taskWrapper, element);

      projWrapper.appendChild(taskWrapper);
    });

    this.GenerateAddButton(projWrapper);

    Wrapper.appendChild(projWrapper);
  }

  GenerateTaskPanel(Wrapper, task) {
    //
    //Given a task and a wrapper, generate a panel that handles info about the task.
    //
    Wrapper.classList.add(task.taskPrio, "taskWrapper");

    const taskName = document.createElement("div");
    taskName.textContent = task.taskName;
    taskName.classList.add("taskName", "taskItem");
    Wrapper.appendChild(taskName);

    const taskDate = document.createElement("div");
    taskDate.textContent = task.taskDue.toLocaleString();
    taskDate.classList.add("taskDate", "taskItem");

    this.GenerateDeleteButton(Wrapper);

    Wrapper.appendChild(taskDate);
  }

  GenerateDeleteButton(wrapper) {
    const Delete = document.createElement("button");
    Delete.classList.add("deleteBtn");
    Delete.textContent = " X ";

    Delete.addEventListener("click", () => this.RemovePanel(wrapper));

    wrapper.appendChild(Delete);
  }

  GenerateAddButton(wrapper) {
    const Add = document.createElement("button");
    Add.classList.add("addBtn");
    Add.textContent = " + ";

    Add.addEventListener("click", () => this.GenerateAddForm(wrapper));

    wrapper.appendChild(Add);
  }

  // Remove a panel and all its children from the DOM
  RemovePanel(panel) {
    while (panel.firstChild) {
      panel.removeChild(panel.firstChild);
    }
    panel.parentNode.removeChild(panel);
  }

  //Generate a form that allows you to add a new project, or task
  //should have a submit button at the bottom, and a close button.
  GenerateAddForm(wrapper) {
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
    inputDate.setAttribute("type", "text");
    inputDate.setAttribute("name", "dateInput");
    form.appendChild(inputDate);

    const inputPrio = document.createElement("input");
    inputPrio.setAttribute("type", "text");
    inputPrio.setAttribute("prio", "textInput");
    inputPrio.setAttribute("placeholder", "Enter priority");
    form.appendChild(inputPrio);

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission behavior

      // Retrieve input values
      const name = inputName.value;
      const description = inputDesc.value;
      const date = inputDate.value;
      const priority = inputPrio.value;

      this.RemovePanel(formWrapper);
    });

    formWrapper.appendChild(form);

    wrapper.appendChild(formWrapper);
  }

  GenerateOnEntry(defaultProj) {
    this.GenerateDomStructure(defaultProj);
  }
}
