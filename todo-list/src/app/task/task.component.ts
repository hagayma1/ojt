import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task; 
  constructor() {
  }

  ngOnInit(task:string): void {
    console.log(this.task);
  }



}
