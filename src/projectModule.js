export class Project {
  constructor(name, description, dueDate, priority, tasks) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.tasks = tasks;
  }

  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Description: ${this.description}`);
    console.log(`Due Date: ${this.dueDate}`);
  }

  // Getter methods
  get projectName() {
    return this.name;
  }

  get projectDesc() {
    return this.description;
  }

  get projectDue() {
    return this.dueDate;
  }

  get projectPrio() {
    return this.priority;
  }

  get projectTasks() {
    return this.tasks;
  }

  // Setter methods
  set projectName(newName) {
    this.name = newName;
  }

  set projectDesc(newDesc) {
    this.description = newDesc;
  }

  set projectDue(newDate) {
    this.dueDate = newDate;
  }

  set projectPrio(newPrio) {
    this.priority = newPrio;
  }

  set projectTasks(newTasks) {
    this.tasks = newTasks;
  }
}
