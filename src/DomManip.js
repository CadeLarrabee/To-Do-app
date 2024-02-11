import { format, addDays } from "date-fns";
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
    navDefProj.classList.add("projectName", "navItem");
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

  GenerateOnEntry(defaultProj) {
    this.GenerateDomStructure(defaultProj);
  }
}

// function clearBodyExceptHeaderContainer() {
//   const bodyChildren = document.body.children;

//   // Iterate through the child nodes of document.body
//   for (let i = bodyChildren.length - 1; i >= 0; i--) {
//     const child = bodyChildren[i];

//     // Check if the child is not headercontainer
//     if (child.className !== "headerContainer") {
//       // Remove the child node
//       document.body.removeChild(child);
//     }
//   }
// }
