import { Component } from '@angular/core';
import backupSaver from './modules/backupSaver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo-list';
  tasks = backupSaver.restore("tasks");
  tasksToShow = this.tasks;
  filter = "";

  constructor() {
    if(this.tasks == null) {
      this.tasks = [];
      this.tasksToShow = [];
    }  
  }

  onTaskAdded(data: { text: string, checked: boolean }) {
    console.log(this.tasks);
    this.tasks.push(data);
    this.filterTasks();
    this.backup();
  }

  onUpdateTask(data: { text: string, checked: boolean }) {
    let indexToUpdate = this.tasks.findIndex(item => item.text === data.text);
    this.tasks[indexToUpdate].checked = data.checked;
    this.filterTasks();
    this.backup();
  }

  onDeleteTask(data: { text: string, checked: boolean }) {
    let indexToDelete = this.tasks.indexOf(data);
    this.tasks.splice(indexToDelete, 1);
    this.filterTasks();
    this.backup();
  }

  onSearch(data: string) {
    this.filter = data;
    this.filterTasks();
  }

  filterTasks() {
    this.tasksToShow = this.tasks.filter(task => task.text.includes(this.filter));
  }

  backup(): void {
    backupSaver.save("tasks", this.tasks);
  }
}
