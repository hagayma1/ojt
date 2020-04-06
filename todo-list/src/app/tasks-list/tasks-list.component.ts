import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  @Input() tasks;
  @Output() deleteTask = new EventEmitter<{text:string,checked:boolean}>();
  @Output() updateTask = new EventEmitter<{text:string,checked:boolean}>();
  
  constructor() { }

  ngOnInit() {}

  onUpdateTask(data: {text:string,checked:boolean}):void {
    this.updateTask.emit(data);
  }

  onDeleteTask(data: {text:string,checked:boolean}):void {
    this.deleteTask.emit(data);
  }

}
