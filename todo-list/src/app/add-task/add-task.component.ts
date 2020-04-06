import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() addTask = new EventEmitter<{text:string, checked:boolean}>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddTask(event): void {
    this.addTask.emit({text:event.value, checked:false});
    event.value="";
  }

}
