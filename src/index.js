import "./style.css";
import { Project } from "./projectModule.js";
import { Task } from "./taskModule.js";
import { DomController } from "./DomManip.js";

function OnEntry() {
  const DomManip = new DomController();
  const defaultProj = new Project(
    "Javascript Development",
    "Learning web development one step at a time!",
    "Oct 2024",
    "Urgent"
  );
  DomManip.GenerateOnEntry(defaultProj);
}

OnEntry();
