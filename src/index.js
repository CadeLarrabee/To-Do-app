import "./style.css";
import { Project } from "./projectModule.js";
import { Task } from "./taskModule.js";
import { DomController } from "./DomManip.js";
import { format } from "date-fns";

function OnEntry() {
  const DomManip = new DomController();

  const defTasks = [
    new Task("Task 1", "Description of Task 1", "02/11/2014", "Routine"),
    new Task("Task 2", "Description of Task 2", "02/11/2014", "Critical"),
    // Add more tasks as needed
  ];

  const defaultProj = new Project(
    "Javascript Development",
    "Learning web development one step at a time!",
    "02/11/2014",
    "Urgent",
    defTasks
  );
  DomManip.GenerateOnEntry(defaultProj);
}

OnEntry();
