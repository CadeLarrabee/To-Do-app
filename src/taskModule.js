import { parse } from "date-fns";
export class Task {
  constructor(name, description, dueDate, priority, project) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.domElement = null;
  }
  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Description: ${this.description}`);
    console.log(`Due Date: ${this.dueDate}`);
  }
  //
  //Getters
  //
  get taskName() {
    return this.name;
  }
  get taskDesc() {
    return this.description;
  }
  get taskDue() {
    return this.dueDate;
  }
  get taskPrio() {
    return this.priority;
  }
  get taskProj() {
    return this.project;
  }
  //
  //Setters
  //
  set taskName(newName) {
    this.name = newName;
  }
  set taskDesc(newDesc) {
    this.description = newDesc;
  }
  set taskDue(newDate) {
    this.dueDate = newDate;
  }
  set taskPrio(newPrio) {
    this.priority = newPrio;
  }
  set taskProj(newProj) {
    this.project = newProj;
  }
}
