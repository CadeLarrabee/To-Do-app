class Task {
  constructor(name, description, dueDate, priority, project) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
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
  set projectName(newName) {
    this.name = newName;
  }
  set projectDesc(newDesc) {
    this.description = newDesc;
  }
  set projectDue(newDate) {
    this.dueDate = newDate;
  }
  set taskPrio(newPrio) {
    this.priority = newPrio;
  }
  set taskProj(newProj) {
    this.project = newProj;
  }
}
