//Controls the dom for the project
//
export class DomController {
  //
  //Handle the setup of the page pre-project injection
  //
  GenerateDomStructure() {
    this.GenerateNavPanel();

    const mainProjPanelWrapper = document.createElement("div");
  }

  GenerateNavPanel() {
    const navPanelWrapper = document.createElement("div");
    navPanelWrapper.classList.add("nav");
  }

  GenerateOnEntry(defaultProj) {
    const testProj = document.createElement("div");
    testProj.textContent = defaultProj.projectName;
    document.body.appendChild(testProj);
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
