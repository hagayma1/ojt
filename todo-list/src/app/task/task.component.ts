import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @ViewChild('checkbox') checkbox:ElementRef;
  @Input() task:{text:string, checked:boolean}; 
  @Output() deleteTask = new EventEmitter<{text:string,checked:boolean}>();
  @Output() updateTask = new EventEmitter<{text:string,checked:boolean}>();
  constructor() {
  }

  ngAfterViewInit(): void {
    this.checkbox.nativeElement.checked=this.task.checked;
  }

  onDeleteTask():void {
    this.deleteTask.emit(this.task);
  }

  onUpdateTask():void {
    this.task.checked = this.checkbox.nativeElement.checked;
    this.updateTask.emit(this.task);
  }
}
